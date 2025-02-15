'use client'
import React, { useState } from "react";
import Nav from "./nav";
import MovileNav from "./movileNav";

const ResponsiveNav = () => {

    const [showNav, setShowNav] = useState(false)
    const handleNavShow = () => {
        setShowNav(true)
    }
    const handleNavHide = () =>{
        setShowNav(false)
    }

    return(
        <div>
            <Nav openNav = {handleNavShow}/>
            <MovileNav showNav={showNav} closeNav ={handleNavHide}/>
        </div>

    )
}

export default ResponsiveNav