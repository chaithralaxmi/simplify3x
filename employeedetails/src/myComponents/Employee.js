import React from 'react'


export const Employee = ({ employee, onDelete ,onEdit }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Employee_id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th scope="row">{employee.employee_id}</th>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td><button className="btn btn-sm btn-primary" onClick={() => { onEdit(employee) }}>Edit</button></td>
            <td><button className="btn btn-sm btn-danger" onClick={() => { onDelete(employee) }}>Delete</button></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
