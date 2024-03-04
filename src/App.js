
import React from "react";
import { ReactDOM } from "react-dom/client";
import Header from "../src/components/Header";
import Note from "./components/Note";
import notes from "./notes.js"
import Footer from "../src/components/Footer";

function createNote (note){
  return(
  <Note 
  // imp property which we have to give to access the object elements 
    key={note.key}
    title={note.title}
    content={note.content}
  />
  );
}

function App() {
  return (
    <div className="App">
    <Header />
    {/* {arrayName.map(function)} */}
    {notes.map(createNote)}
    {/* <Note title ={note[0].title} content={note[0].content} />
    <Note title ={note[1].title} content={note[1].content} />
    <Note title ={note[2].title} content={note[2].content} />
    <Note title ={note[3].title} content={note[3].content} />
    <Note title={note[4].title} content={note[4].content} /> */}
    <Footer />
    </div>
  );
}

export default App;
