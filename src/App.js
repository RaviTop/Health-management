import { useState } from "react";
import Employees from "./components/Employees";


function App() {
   
  const[role ,setRole] = useState('')
  const showEmployee = true;
  console.log(role)
  return (
  <>
   {/* it is ternary oprater using of this statment you can see only false value statement is paregraph and true value is show 
   employess list  */}
   <input type="text" onChange={ (e)=>{ 
       setRole(e.target.value)
   }} />
  {showEmployee ? 
  <>
   <Employees name ={"raviraj"} role ={"develepor"} />
   <Employees  name ={"tejas"} role ={"manager"} />
   <Employees  name ={"chetanya"} role ={"HR"}/> 
   <Employees  name ={"sumit"} role ={"tame leader"} />
   <Employees  name ={"tejas"} role = {role} />
   </>
   : <p> are you not see employees  </p>
  }
  </>
  );
}

export default App;
