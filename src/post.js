import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import firebase from './firebase.js';
import "./Css/post-form.css";

export default function Postform(props) {

    const [name, setName] = useState('');
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    function handleOnchange(e) {
        setName(e.target.value);
        console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`users/${props.uid}`);
        const item = {
            todo: name,
        }
        itemsRef.push(item);
        setName('')
    }
    return (
        <div className="App">
            <nav className="navigation">
                <div className="nav-center">
                    <div className="nav-header">
                        <h3 className="nav-brand" style={{ fontFamily: "Fredoka One" }}>
                            Yet Todos
                        </h3>
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
                        <Link to="/">
                            <button style={{
                                backgroundColor: "antiquewhite",
                                color: "black",
                                borderRadius: ".5rem",
                                border: "1px solid black",
                                padding: ".5rem 1.5rem .5rem 1.5rem",
                                maxWidth: "140px",
                                margin: "1rem 1rem 1rem 0rem",
                                height: "40px"
                            }} >Home</button>
                        </Link>

                    </ul>
                </div>
            </nav>
            <div className="todo-list box">
                <div className="form-style-7">
                    <h3 style={{ textAlign: "center", fontFamily: "Montserrat" }}>Add item to Docket</h3>
                    <ul>
                        <li>
                            {/* <label style={{}} for="name">Name</label> */}
                            <input type="text" onChange={handleOnchange} name="name" maxlength="100" />
                            <span>Enter item to be added to your Todo Docket</span>
                        </li>

                        <li>
                            <Link to="/"><button onClick={handleSubmit} value="Add" >Add</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
