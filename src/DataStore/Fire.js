import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {database} from './Config';

function Fire()
{
   const [fname, setFName] = useState("");
   const [lname, setLName] =useState("");
   
   const value= collection(database,"demo");

   const Handle = async()=>{
      await addDoc(value,{name1:fname,name2:lname});
   }
   return(
   <div>
      <input type="text" placeholder="First Name" onChange={(e)=>setFName(e.target.value)}></input><br/><br/>
      <input type="text" placeholder="Last Name" onChange={(e)=>setLName(e.target.value)}></input><br/><br/>
      <button  onClick={Handle}>Submit</button>
   </div>
   )
}


export default Fire;