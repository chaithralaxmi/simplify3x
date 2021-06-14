import React, {useState} from 'react';
import { validEmail, validPhone} from '../myComponents/regex';

export const AddEmployee = (props) => {
   
    const [first_name,setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
   

    const [first_nameErr,setFirst_nameErr] = useState({});
    const [phoneErr,setPhoneErr] = useState({});
    const [emailErr,setEmailErr] = useState({});
    const submit = (e)=>{
            e.preventDefault();
            const isValid = formValidation();
            if(isValid){
                props.addEmployee(first_name,last_name,phone,email);
                setFirst_name("");
                setLast_name("");
                setPhone("");
                setEmail(""); 
            }
            // if(!phone ||!email ){
            //     alert("this cannot be empty")
            // }
            // else{
            // addEmployee(first_name,last_name,phone,email);
            // setFirst_name("");
            // setLast_name("");
            // setPhone("");
            // setEmail("");
            // }
    }
    const formValidation = () =>{
        const first_nameErr = {};
        const phoneErr = {};
        const emailErr = {};
        let isValid = true;
        
        if(first_name.trim().length<5){
            first_nameErr.firstNameShort = "First name is too short";
            isValid = false;
        }
        if(first_name.trim().length>20){
            first_nameErr.firstNameLong = "First name is too long";
            isValid = false;
        }
        if (!validEmail.test(email)) {
            emailErr.emailmsg = "invalid email!";
            isValid = false;
         }
         if (!validPhone.test(phone)) {
            phoneErr.phonemsg = "invalid phone!";
            isValid = false;
         }

        setFirst_nameErr(first_nameErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        return isValid;
    }
    return (
        
        <div className="container my-4">
            <h3>Add an Employee</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                    <input type="text" value={first_name} onChange={(e)=>setFirst_name(e.target.value)} className="form-control" id="exampleInputFirstName"/>
                    {Object.keys(first_nameErr).map((key)=>{
                        return <div style={{color:"red"}}>{first_nameErr[key]}</div>
                    })}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                    <input type="text" value={last_name} onChange={(e)=>setLast_name(e.target.value)} className="form-control" id="exampleInputLastName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                    <input placeholder="Enter phone numbber" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPhone"/>{phone}
                    {Object.keys(phoneErr).map((key)=>{
                        return <div style={{color:"red"}}>{phoneErr[key]}</div>
                    })}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        {Object.keys(emailErr).map((key)=>{
                        return <div style={{color:"red"}}>{emailErr[key]}</div>
                    })}
                </div>
                <button type="submit" className="btn btn-success">Add Employee</button>
            </form>
        </div>
    )
}
