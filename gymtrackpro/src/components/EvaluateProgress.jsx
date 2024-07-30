import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EvaluateProgress() {
    const { id } = useParams();
    const [progress, setProgress] = useState({
        load: '',
        repetitions: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProgress({ ...progress, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar a progressão
        console.log(progress);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Avaliar Progressão do Paciente</h2>
            <input name="load" placeholder="Carga" onChange={handleChange} required />
            <input name="repetitions" placeholder="Repetições" onChange={handleChange} required />
            <button type="submit">Salvar Progressão</button>
        </form>
    );
}

export default EvaluateProgress;
