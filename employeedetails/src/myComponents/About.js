import React from 'react'
import { Link } from 'react-router-dom'
export const About = () => {
    let myStyle = {
        minHeight: "72vh",
        margin: "40px auto"
    }
    return (
        <div className="container m-5 p-5" style={myStyle}>
            <div className="card text-center p-5">
            <div className="card-header">
                About Project
            </div>
            <div className="card-body ">
                <h5 className="card-title ">Employees</h5>
                <p className="card-text">For this project I have selected <strong>React Js</strong> Framework And Using<strong> HTML/CSS and Bootstrap </strong>created an UI in which the user should be able to fill in a form and add an Employee to a Company.Fields -First Name,Last Name,Contact Number (validated,Email ID (validated),Employee ID (random number between e1 to e100) and On Click of add/submit button the user is added in list.The user is also able to delete any particular employee.</p>
                <Link to="/" className="btn btn-primary">Go To Home</Link>
            </div>
            <div className="card-footer text-muted">
                Thank You
            </div>
        </div>
        </div>
    )
}
