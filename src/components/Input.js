import React from "react";

function Input()
{
    return(
        <div className="textContainer">
        <input className="text-box"id ="input" placeholder="Enter Text...." />
        <button type="submit" className="btn-add" id="btn">Add</button>
        </div>
    )
}

export default Input;