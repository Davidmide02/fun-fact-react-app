// import {React} from "module";?

import React from "react";
import Reactlogo from "../assets/react.svg";


function Header() {
    return (
        <header className="header">
                <div className="logo">
            <img src={Reactlogo} alt="logo" className="animate" />
            <h1>Reactfact</h1>

                </div>
            <h3>React course - project 1</h3>
        </header>
    )
}

export default Header;