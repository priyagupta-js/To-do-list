import React ,{useState} from "react";

function Input()
{
    const [ text, setText] = useState();

    function handleText(){
        console.log(setText(text))
    }
    return (
        <div className="textContainer">
        <input type="text" value={text} className="text-box"/>
        <button type="button" onClick={handleText} className="btn-add">Add</button>
        <ul>
            <li>
                {setText}
            </li>
        </ul>
        </div>
    );
}

export default Input;