import React from "react";

function Home()
{
   const LogOut = ()=>
   {
      localStorage.clear();
      window.location.reload(true);
   }
   return(
      <div>
         <h1>Home Page</h1>
         <button onClick={LogOut}>LogOut</button>
      </div>
   )
}
export default Home;