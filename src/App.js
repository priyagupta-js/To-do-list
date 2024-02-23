
import React from "react";
import Header from "../src/components/Header";
import Note from "./components/Note";
import Footer from "../src/components/Footer";
function App() {
  return (
    <div className="App">
    <Header />
    <Note title = "title" content="Content goes here" />
    <Note title ="title" content="Content goes here" />
    <Footer />
    </div>
  );
}

export default App;
