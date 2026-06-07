'use client';

import "./globals.css";
import { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <main>
            <h3 className="first-subtitle">
                    Hi I'm Harrison!
                </h3>
            <h1 className="main-title">
                Welcome to HarrisonTube Shop
            </h1>
            <h1>{counter}</h1>
            <button onClick={handleClick} className="main-button">
                Click on Me
            </button>
            <div className="first-container">
                <h2 className="first-title">
                    First why don't you check out our HarrisonTube channel?
                </h2>
                
                <p className="first-description">
                    There you can find all the latest videos about me.
                </p>
                <a href="https://harrisontube.com" className="first-link">
                    <button className="first-button">
                        Watch HarrisonTube
                    </button>
                </a>
            </div>
        </main>
    )  
}