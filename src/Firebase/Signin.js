import { useEffect, useState } from "react";
import { signInWithPopup } from 'firebase/auth';
import { Auth, Provider } from "./Config";
import Home from "./Home"

function Signin()
{
   const[value,setValue] = useState('');

   const handle = ()=>
   {
      signInWithPopup(Auth,Provider).then((data)=>
      {
         setValue(data.user.email);
         localStorage.setItem('email', data.user.email);
      });
   };
   useEffect(()=>{setValue(localStorage.getItem('email'));},[]);
   return(
   <div> 
   {value ? <Home /> :  <button onClick={handle}>Sign In With Google </button>}  
   </div>
   )
}
export default Signin;