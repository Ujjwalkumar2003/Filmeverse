import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import {moviesref} from '../firebase/firebase'
import { getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import {doc} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { ThreeCircles, ThreeDots } from 'react-loader-spinner'
import  Reviews from  './Reviews'

const Detail = () => {
  const{id}=useParams();
  const[data,setData]=useState({
    title:"",
     year:"",
     img:"",  
     description:"",
     rating:0,
     rated:0

  });
  const[loading,setLoading]=useState(false);

  useEffect(()=>{
    async function getData(){
      setLoading(true);

       const _doc=doc(db,"movies",id);

      const _data=await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }getData();
  })

  return (
    
    <div className='p-4 mt-4 flex  flex-col md:flex-row items-center md:items-start w-full justify-center'>  
   
   <img className='h-96 mt-4 flex justify-center  md:sticky top-24'   src={data.img} alt="" />
    <div className='ml-4 w-1/2 '>
      <h1 className =' text-5xl  font-bold  text-gray-400'  > {data.title} <span className='text-xl'>{data.year}</span>
     
      </h1>
      <ReactStars className=' text-5xl h-'
        size={20}
        half={true}
        value={data.rating/data.rated}
        edit={false}
        
        
        />
        <br></br>
      
        <p className=' text-white text-xl mt-2 '>
         {data.description }
        </p>
        <Reviews id={id} prevRating={data.rating} userRated={data.rated}/>

        

  

    
    </div>
    

    </div>
  )
}

export default Detail