"use client"
import React from 'react'
import './globals.css'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {

  function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div class="topnav" id="myTopnav">
        {/* <a href="#home" class="active">Home</a> */}
        <a href="#home">Dr. Himanshu</a>
        <a href="#home">Home</a>
        <a href="#news">Products</a>
        <a href="#contact">Treatments</a>
        <a href="#contact">Gallery</a>
        <a href="#contact">Results</a>
        <a href="#contact">Ordering Medicine</a>

        <a href="javascript:void(0);" class="icon" onClick={menu}>
          <AiOutlineMenu />
        </a>
      </div>

    </>
  )
}

export default Navbar