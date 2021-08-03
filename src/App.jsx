import React from "react";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import ImageGallery from "./components/ImageGallery";

const App = () =>{
    const [input, setInput] = useState("");
    return( 
    <center>
        <SearchBox input={input} setInput={setInput}></SearchBox>
    <ImageGallery query={input}></ImageGallery>
    </center>
    )
};

export default App;