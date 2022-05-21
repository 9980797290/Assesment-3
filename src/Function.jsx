// import React, { useState } from 'react'


//  const Function=()=> {
 
// const[data,setDatas]=useState({
//   name:"",
//   department:"",
//   rating:"",
// })
// const [items, setItems] = useState([]);

// const{name,department,rating}=data;

// handleGoBack = () => {
//     this.setState({
//         showForm: !this.state.showForm
//     });
// }
//  const Onchange=e=>{
// const name = e.target.name;
// const value = e.target.value;
// console.log(name, value);
// setDatas({ ...data, [name]: value });
// }
//   const handleChanges=e=>{
//     e.preventDefault()
//     console.log(data)
//     const newData = { ...data, id: new Date().getTime().toString() };
//     console.log(items)
//     setItems([...items, newData]);
//     console.log(items);

//     setDatas({ name: "", department: "", rating: "" });



//   }


//  return (
//     <div>
//       <div className='main'>
//   <h1 style={{textAlign:'center'}}>EMPLOYEE FEEDBACK FORM</h1>
//   <form onSubmit={handleChanges}>
//     <label id='one'><h1>Name:</h1></label>

//     <input className='two'  type='text' name='name' 
//     placeholder='ENTER THE NAME:' 
//     onChange={Onchange} value={name} ></input>
      
//     <label id='three' ><h1>Department:</h1></label>
//     <input className='four' type='text'  placeholder='ENTER THE SECTOR:'  name='department'  
//     value={department}
//          onChange={Onchange}
//     ></input>
//     <label id='six'><h1>Rating:</h1></label>
//     <input className='seven' type='text'  placeholder='ENTER THE RATING:' name='rating'
//      value={rating}
//     onChange={Onchange} 
//     ></input>


//     <button id='mains' type='submit'>Submit</button>
//   </form>
  
  
// </div>


//  </div>

// )
// }

// export default Function