import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditTraining() {
    const { id } = useParams();
    const [training, setTraining] = useState({
        title: '',
        series: '',
        repetitions: '',
        weight: '',
        restTime: '',
        dayOfWeek: '',
        patient: '',
        links: '',
    });

    useEffect(() => {
        // Lógica para buscar os detalhes do treino pelo ID e preencher o estado
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTraining({ ...training, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar as alterações do treino
        console.log(training);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Treino</h2>
            <input name="title" placeholder="Título" value={training.title} onChange={handleChange} required />
            <input name="series" placeholder="Séries" value={training.series} onChange={handleChange} required />
            <input name="repetitions" placeholder="Repetições" value={training.repetitions} onChange={handleChange} required />
            <input name="weight" placeholder="Peso" value={training.weight} onChange={handleChange} required />
            <input name="restTime" placeholder="Tempo de Descanso" value={training.restTime} onChange={handleChange} required />
            <input name="dayOfWeek" placeholder="Dia da Semana" value={training.dayOfWeek} onChange={handleChange} required />
            <input name="patient" placeholder="Paciente" value={training.patient} onChange={handleChange} required />
            <input name="links" placeholder="Links das Execuções" value={training.links} onChange={handleChange} />
            <button type="submit">Salvar Alterações</button>
        </form>
    );
}

export default EditTraining;
