import React from 'react';
import './App.css';
import {Content} from "./Content";
import {Footer} from "./Footer";
import {NavBar} from "./NavBar";
import {Header} from "./Header";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Content/>
            <Footer/>
        </div>
    );
}
export default App;

