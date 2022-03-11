import React, { useState } from "react";



export default function Nav() {

    let loginName = sessionStorage.getItem("username");
    let id = sessionStorage.getItem("id");

    <div id='cart'>
    <div className="cartNumLogo"></div>
    <img src='./cart.png'/>
    <div/>
   <div>{loginName}</div> 
   </div>

}



