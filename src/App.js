
import React from "react";
// import { ReactDOM } from "react-dom/client";
import Header from "../src/components/Header";
// import Note from "./components/Note";
// import notes from "./notes.js"
import Footer from "../src/components/Footer";
import Input from "./components/Input.js";



function App() {
  return (
    <div className="App">
    
    <Header />
    <Input />
    {/* <Input/> */}
    {/* {arrayName.map(function)} */}
    {/* Arrow function - (anonymous function) */}
    {/* {notes.map(noteItem =>( */}
  {/* <Note 
  // imp property which we have to give to access the object elements 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
  /> */}
    {/* ))} */}
    <Footer />
    </div>
  );
}

export default App;
