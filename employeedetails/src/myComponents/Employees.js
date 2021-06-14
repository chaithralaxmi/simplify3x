import React from 'react'
import {Employee} from "../myComponents/Employee";


export const Employees = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3>Emoployees List</h3>
            
            {props.employees.length===0 ? "No Employee Details to display" :
            props.employees.map((employee)=>{
                return <Employee employee={employee} key={employee.employee_id} onDelete={props.onDelete} onEdit={props.onEdit}/>})}
            
        </div>
    )
}
