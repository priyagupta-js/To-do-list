import React ,{useState} from "react";

function Input()
{
    const [ text, setText] = useState('');
    const [toDo, setToDo] = useState([]);

    function handleText(){
      setToDo([...toDo, text])
      setText('')
    }

    function handleChange(e)
    {
        setText(e.target.value)
        // console.log(e.target.value)
    }
    return (
        <div className="Container">
          <div className="inputContainer">
            <input type="text" value={text} onInput={handleChange} className="text-box"/>
            <button type="button" onClick={handleText} className="btn-add">Add</button>
          </div>
          <div className="listContainer">
            <ul className="itemContainer">
                {toDo.map((list) => (
                  <li className="list-item" key={list}>{list} <button>X</button></li>

                ))}
            </ul>
            </div>
        </div>
    );
}

export default Input;
