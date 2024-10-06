import React, { useState } from "react";

function Input()
{
    // const [ text, setText] = useState("title");

    return
    (
        <div className="textContainer">
        <input className="text-box" id ="input" placeholder="Enter Text....">{text}</input>
        <button type="submit" className="btn-add" id="btn">Add</button>
        </div>
    );
}

export default Input;