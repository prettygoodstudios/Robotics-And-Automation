import React, {useState} from "react";

const Header = ({}) => {

    const [show, setShow] = useState(false);

    const route = (id) => {
        const element = document.getElementById(id);
        window.scroll({
            top: element.offsetTop - 100,
            behavior: "smooth"
        })
    }

    return <div className="header">
        <div className="header__title">Robotics &amp; Automation</div>
        <div className={"header__toggle" + (!show ? "" : " header__close")} onClick={() => setShow(!show)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="header__menu" style={show ? {display: "flex"} : {}}>
            <a onClick={() => route("intro")}>Intro</a>
            <a onClick={() => route("tech")}>Technologies</a>
            <a onClick={() => route("uses")}>Uses</a>
        </div>
    </div>
}

export default Header;