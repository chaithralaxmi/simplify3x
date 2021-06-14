
import './App.css';
import Header from "./myComponents/Header";
import {Employees} from "./myComponents/Employees";
import {Footer} from "./myComponents/Footer";
import {About} from "./myComponents/About";

import React, {useState} from 'react';
import {AddEmployee} from './myComponents/AddEmployee';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initEmployee;
    if(localStorage.getItem("employees")===null){
      initEmployee = []
    }
    else{
      initEmployee = JSON.parse(localStorage.getItem("employees"));
    }
    
  const onDelete=(employee)=>{
    console.log("I am on Delete");
    setEmployees(employees.filter((e)=>{
      return e!==employee;
    }));
    localStorage.setItem("employees",JSON.stringify(employees))
  }
 const onEdit=(employee)=>{
   console.log("I am on edit ",employee)
 }
  const addEmployee=(first_name,last_name,phone,email)=>{
    let employee_id,employee_id_num;
    if(employees.length===0){
      employee_id="e1";
    }
    else{
      employee_id_num = (Math.floor(Math.random() * 100) + 100).toString().substring(1);
      employee_id = "e"+employee_id_num.toString()
    }
    const myEmployee = {
      employee_id : employee_id,
      first_name : first_name,
      last_name : last_name,
      phone : phone,
      email : email,
    }
    setEmployees([...employees,myEmployee]);
  }
  const [employees, setEmployees] =useState(initEmployee);

  


  return (
    <>
    <Router>
      <Header title="Simplify3X"/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
              <AddEmployee addEmployee={addEmployee} />
              <Employees employees={employees} onDelete={onDelete} onEdit={onEdit}/>
            </>
          )
        }}>
        </Route>
        
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
     
      <Footer/>
    </Router>
    </>
  );
}

export default App;
