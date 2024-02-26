
import React from "react";
import Header from "../src/components/Header";
import Note from "./components/Note";
import note from "./notes.js"
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
    <Header />
    <Note title ={note[0].title} content={note[0].content} />
    <Note title ={note[1].title} content={note[1].content} />
    <Note title ={note[2].title} content={note[2].content} />
    <Note title ={note[3].title} content={note[3].content} />
    <Note title={note[3].title} content={note[3].content} />
    <Footer />
    </div>
  );
}

export default App;
