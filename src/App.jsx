import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";
import {Footer} from "./Footer";

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4gFf12WnnygvZJvKY57HOlhaqx95ttnbUg&usqp=CAU"/>
            </header>
            <nav className="navbar">
                <div>
                    Profile
                </div>
                <div>
                    Message
                </div>
                <div>
                    News
                </div>
            </nav>

            <div className="content">
                Main Content
            </div>
            <footer className="footer">
                social-network.com
            </footer>

        </div>
    );
}

export default App;

