import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Headers.defaultProps = {
    title:"Simlify3X"
}
Headers.propTypes={
    title : PropTypes.string
}
