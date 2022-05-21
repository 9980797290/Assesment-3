import Class from './Class'
import React, {useState} from 'react'


function App() {
  const [employees, setEmployees] = useState([]);

const addEmployeeHandler = (employee) => {
  setEmployees([...employees, employee]);
}
  return (
    <div>
      <div className="App">
      <Class  addEmployeeHandler={addEmployeeHandler} employees={employees}/>
    </div>
    </div>
  )
}

export default App