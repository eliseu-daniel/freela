import React from 'react';
import Sidebar from './Sidebar';
import '../Home.css';

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <main className="content">
                <h1>Bem-vindo ao GymTrackPro</h1>
                <p>Selecione uma opção no menu para começar.</p>
            </main>
        </div>
    );
}

export default Home;
