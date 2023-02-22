import React,{useContext, useState} from 'react'
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesref } from '../firebase/firebase';
import { async } from '@firebase/util';
import swal from 'sweetalert';
import { Appstate } from '../App';
import { useNavigate } from 'react-router-dom';


const AddMove = () => {
  const useAppstate=useContext(Appstate)
  const navigate=useNavigate();
  
  const [form,setForm]= useState({
    title:" ",
    img:" ",
    year:" ",
    description:" ",
    rated:0,
    rating:0
  });


  const[loading,setLoading]=useState(false);

  const addMovie=async()=>{

    setLoading(true);
    try{
      if(useAppstate.login){
    await addDoc(moviesref,form);
    swal({
      title:" successfully added",
      icon:" success",
      buttons:"done",
      timer:3000
  })
  setForm({
    title:" ",
    img:" ",
    year:" ",
    description:" "

  })


 } else{
  navigate('/login')
 }
     

}
catch(err){
  swal({
    title:err,
    icon:" err",
    buttons:"false",
    timer:3000
})
}  setLoading(false);
  }


  return (
    <div>
             <section class="text-gray-600 body-font relative mt-2">
  <div class="container px-5 py-8    mx-auto ">
    <div class="flex flex-col text-center w-full mb-6">
      <h1 class="sm:text-5xl text-2xl font-medium title-font mb-3 mt-2  text-white">Add Movie</h1>
     </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-xl text-gray-100 " >Title</label>
            <input required type="text"  id="name" name="name" value ={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} class="w-full  bg-slate-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-xl text-gray-100">Year</label>
            <input required type="email" id="email" name="email"  value ={form.year} onChange={(e)=>setForm({...form,year:e.target.value})} class="w-full bg-slate-50       rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-6 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-xl text-white">Image Link</label>
            <input required id="message" name="message" value ={form.img} onChange={(e)=>setForm({...form,img:e.target.value})}  class="w-full bg-slate-50       rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="p-6 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-xl text-white">Message</label>
            <textarea required id="message" name="message" value ={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={addMovie} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            
            {loading ? <TailSpin height={25} color='white'/>:'Submit'}
            
            </button>
        </div>
        
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}


export default AddMove
