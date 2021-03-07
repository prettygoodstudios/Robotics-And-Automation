import React from "react";

const Header = ({}) => {
    return <div className="header">
        <div className="header__title">Robotics &amp; Automation</div>
        <div className="header__toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="header__menu">
            <a href="#">Intro</a>
        </div>
    </div>
}

export default Header;