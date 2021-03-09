import React from "react";
import Conclude from "./Conclude";
import Footer from "./Footer";
import Foundation from "./Foundation";
import Header from "./Header";
import Hero from "./Hero";
import How from "./How";
import Industry from "./Industry";
import Intro from "./Intro";
import Jobs from "./Jobs";
import Tech from "./Tech";
import Uses from "./Uses";


const App = () => {
    return <div>
        <Header/>
        <Hero/>
        <Intro/>
        <Foundation/>
        <How/>
        <Tech/>
        <Uses/>
        <Industry/>
        <Jobs/>
        <Conclude/>
        <Footer/>
    </div>
}

export default App;