import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/create-training">Criar Treino</Link></li>
                    <li><Link to="/edit-training/:id">Editar Treino</Link></li>
                    <li><Link to="/evaluate-progress/:id">Avaliar Progressão</Link></li>
                    <li><Link to="/training-graph">Gráfico de Treino</Link></li>
                    <li><Link to="/create-diet">Criar Dieta</Link></li>
                    <li><Link to="/edit-diet/:id">Editar Dieta</Link></li>
                    <li><Link to="/create-patient">Cadastrar Paciente</Link></li>
                    <li><Link to="/calendar">Calendário</Link></li>
                    <li><Link to="/manage-user">Gerenciar Usuário</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
