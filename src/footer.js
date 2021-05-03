import React from 'react';
import "./css/footer.css"
// import { FiGithub } from "react-icons/fi";


export default function Footer() {

    function currentDate() {
        return new Date().getFullYear();
    }

    return (
        <div id="footer" style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "60px",
        }}>
            <hr style={{ marginBottom: "10px" }} />
            <div style={{
                width: "350px",
                textAlign: "center",
                margin: "auto",
            }} >
                <p className="text-center" style={{ fontFamily: "Roboto Mono" }}>Developed with ❤️ by <b><a href="https://parthpandyappp.github.io">Parth Pandya</a></b></p>

                {/* <p className="text-center" style={{ fontFamily: "Roboto Mono", fontSize: 10, lineHeight: 0.5 }}>Some rights reserved.</p> */}
            </div></div>
    )
}