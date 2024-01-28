import React from 'react';
import './App.css';
import {Content} from "./components/Content";
import {Footer} from "./components/Footer";
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";

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

