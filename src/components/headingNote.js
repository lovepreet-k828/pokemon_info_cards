import React from "react";

export default function HeadingNote(){
    return(
<>
    <div style={{backgroundColor: "gold", paddingTop: "2rem",
    paddingBottom: "1rem", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", fontWeight: "bolder"}}>
    <h1 style={{fontSize: "xx-large"}}>Pokemon Info Cards</h1>
    <div style={{fontSize: "large"}}>Choose the pokemon from right list to see the details</div>
    </div>
    </>
    );
}