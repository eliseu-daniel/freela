import React from "react";

export function Home() {
    return (
        <header className="h-screen relative bg-slate-700">
        <div className="text-3xl font-bold underline">
            <nav className="flex justify-items-center">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dieta</a></li>
                    <li><a href="#">Treino</a></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}