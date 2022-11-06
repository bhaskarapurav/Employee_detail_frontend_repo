import React from 'react'
import {Routes,Route} from "react-router-dom"
import AddEmployee from '../employeeDetails/AddEmployee'
import EmployeeDetails from '../employeeDetails/EmployeeDetails'
import EditEmployee from '../employeeDetails/EditEmployee'
import Error from '../error/Error'
const RootRouter = () => {
  return (
    <div>
        <Routes>
           <Route exact path='/' element={<EmployeeDetails/>}></Route> 
           <Route exact path='/addEmployee' element={<AddEmployee/>}></Route>
           <Route exact path='/editEmployee' element={<EditEmployee/>}></Route>
           <Route path='*' element={<Error/>}></Route>
        </Routes>
    </div>
  )
}

export default RootRouter