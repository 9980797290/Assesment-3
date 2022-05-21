import React, { useState ,useEffect} from 'react'
const Component1=()=> {
    const[count,setName]=useState(0)
    useEffect(() => {
        setTimeout(() => {
          setName((count)=>count+1);
        }, 1000);
      },[]);
  return (
    <div>
<h1>The count is:{count}</h1>
 {/* <button onClick={()=>setName(count+1)} style={{width:'60px' ,height:'50px',backgroundColor:'rebeccapurple',borderRadius:'10px',margin:'20px'}}>+</button>

 <button onClick={()=>setName(count-1)} style={{width:'60px',height:'50px',backgroundColor:'red',borderRadius:'10px'}}>-</button> */}
        {/* <h1 onMouseOver={updateState}>{count}</h1> */}
    </div>
  )
}
export default Component1
