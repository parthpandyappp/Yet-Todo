import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";

const Nav = (props) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    login = () => {
        props.login()
    }

    logout = () => {
        props.logout()
    }

    return (
        <div>
            <nav className="navigation">
                <div className="nav-center">
                    <div className="nav-header">
                        <h2 className="nav-brand" style={{ fontFamily: "Fredoka One" }}>
                            Yet Todos
                        </h2>
                        <button
                            style={{ backgroundColor: "antiquewhite" }}
                            className="nav-toggle"
                            onClick={toggleClass}
                        >
                            <i
                                className="fas fa-bars"
                                style={{ color: "black", background: "transparent" }}
                            ></i>
                        </button>
                    </div>
                    <ul className={isActive ? "links show-links" : "links"}>
                        {props.active ? <Fragment><button onClick={logout} style={{
                            backgroundColor: "antiquewhite",
                            color: "black",
                            borderRadius: ".5rem",
                            border: "1px solid black",
                            padding: ".5rem 1.5rem .5rem 1.5rem",
                            maxWidth: "140px",
                            margin: "1rem 1rem 1rem 0rem",
                            height: "40px",
                            width: "200px"
                        }}
                        >Log Out</button> <Link to="/post">
                                <button style={{
                                    backgroundColor: "antiquewhite",
                                    color: "black",
                                    borderRadius: ".5rem",
                                    border: "1px solid black",
                                    padding: ".5rem 1.5rem .5rem 1.5rem",
                                    maxWidth: "140px",
                                    margin: "1rem 1rem 1rem 0rem",
                                    height: "40px",
                                    width: "200px",
                                }}
                                    className="hover-on"
                                >
                                    Add item
                    </button>
                            </Link></Fragment> : <button onClick={login} style={{
                                backgroundColor: "antiquewhite",
                                color: "black",
                                borderRadius: ".5rem",
                                border: "1px solid black",
                                padding: ".5rem 1.5rem .5rem 1.5rem",
                                maxWidth: "140px",
                                margin: "1rem 1rem 1rem 0rem",
                                height: "40px"
                            }} >Login</button>}

                    </ul>
                </div>
            </nav>
        </div >
    );
};

export default Nav;
