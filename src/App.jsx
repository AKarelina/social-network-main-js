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
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>

            <div className="content">
                <img src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"/>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                </div>
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
            <footer className="footer">
                social-network.com
            </footer>

        </div>
    );
}

export default App;

