import React, { useState } from 'react';

function CreateDiet() {
    const [diet, setDiet] = useState({
        patient: '',
        startDate: '',
        endDate: '',
        meals: '',
        initialWeight: '',
        height: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDiet({ ...diet, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar a dieta
        console.log(diet);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Criar Dieta</h2>
            <input name="patient" placeholder="Paciente" onChange={handleChange} required />
            <input name="startDate" type="date" placeholder="Data de Início" onChange={handleChange} required />
            <input name="endDate" type="date" placeholder="Data de Fim" onChange={handleChange} required />
            <input name="meals" placeholder="Refeições (Horário e Dia da Semana)" onChange={handleChange} required />
            <input name="initialWeight" placeholder="Peso Inicial" onChange={handleChange} required />
            <input name="height" placeholder="Altura" onChange={handleChange} required />
            <input name="age" placeholder="Idade" onChange={handleChange} required />
            <input name="gender" placeholder="Sexo" onChange={handleChange} required />
            <button type="submit">Salvar Dieta</button>
        </form>
    );
}

export default CreateDiet;
