import React from "react";
import "../style.css"

export function Home() {
    return (
        <div className="home">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dieta</a></li>
                    <li><a href="#">Treino</a></li>
                </ul>
            </nav>
        </div>
    )
}