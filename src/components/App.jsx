import React from "react";
import Foundation from "./Foundation";
import Header from "./Header";
import Hero from "./Hero";
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
        <Tech/>
        <Uses/>
        <Industry/>
        <Jobs/>
    </div>
}

export default App;