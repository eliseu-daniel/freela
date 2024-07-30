import React, { useState } from 'react';

function CreateTraining() {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTraining({ ...training, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar o treino
        console.log(training);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Criar Treino</h2>
            <input name="title" placeholder="Título" onChange={handleChange} required />
            <input name="series" placeholder="Séries" onChange={handleChange} required />
            <input name="repetitions" placeholder="Repetições" onChange={handleChange} required />
            <input name="weight" placeholder="Peso" onChange={handleChange} required />
            <input name="restTime" placeholder="Tempo de Descanso" onChange={handleChange} required />
            <input name="dayOfWeek" placeholder="Dia da Semana" onChange={handleChange} required />
            <input name="patient" placeholder="Paciente" onChange={handleChange} required />
            <input name="links" placeholder="Links das Execuções" onChange={handleChange} />
            <button type="submit">Salvar Treino</button>
        </form>
    );
}

export default CreateTraining;
