
import React from "react";
import { ReactDOM } from "react-dom/client";
import Header from "../src/components/Header";
import Note from "./components/Note";
import notes from "./notes.js"
import Footer from "../src/components/Footer";

function createNote (noteItem){
  return(
  <Note 
  // imp property which we have to give to access the object elements 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
  />
  );
}

function App() {
  return (
    <div className="App">
    <Header />
    {/* {arrayName.map(function)} */}
    {notes.map(createNote)}
    <Footer />
    </div>
  );
}

export default App;
