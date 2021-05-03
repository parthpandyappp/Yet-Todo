import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { useState, Fragment } from 'react'



function Nav(props) {

    login = () => {
        props.login()
    }

    logout = () => {
        props.logout()
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <form>
                <h2 className="text-center" style={{ fontFamily: "Fredoka One", alignSelf: "center" }}>Yet To-dos</h2>
            </form>
            <span className="navbar-text">

                {props.active ? <Fragment><button onClick={logout} style={{ marginTop: "-25px", padding: "3px" }} class="btn btn-outline-dark">Log Out</button> &emsp; <Link to="/post">
                    <button style={{ marginTop: "-25px", marginLeft: "5px", padding: "3px" }}
                        class="btn btn-outline-dark">
                        Add item
                    </button>
                </Link></Fragment> : <button onClick={login} style={{ marginTop: "-25px", padding: "3px" }} class="btn btn-outline-dark">Login</button>}

                 &emsp;
                <a href="https://github.com/parthpandyappp/">
                    <i class="fa fa-github" style={{ fontSize: 50 }}></i>
                </a>
            </span>

        </nav>
    )
}

export default Nav