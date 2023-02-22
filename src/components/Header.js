import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
//import LoginIcon from '@mui/icons-material/Login';
import AddMove from './AddMove'
import { Link } from 'react-router-dom'
import { Appstate } from '../App'

const Header = () => {
   
  const useAppstate=useContext(Appstate);


  return (
    <div className='text-5xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500' >
        
 <Link to={'/'}>
    <span>Filme<span className=' text-white'>Verse</span></span>  
 
    </Link>  
 {


useAppstate.login?
 <Link to={'/AddMove'}>
    <h1 className='text-white text-lg flex items-center cursor-pointer'>
        
      <Button>
        <AddIcon className='mr-2' color='secondary'/><span className='text-white'>Add New</span>
        </Button>  
        
    </h1>
    </Link>:
     <Link to={'/login'}>
     <h1 className='text-white text-lg flex items-center cursor-pointer'>
         
       <Button>
 <span className='text-white bg-green-500 p-1 font-medium  '>Login</span>
         </Button>  
         
     </h1>
     </Link>
}  
    
    </div>
  ) 
}

export default Header
