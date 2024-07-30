import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditDiet() {
    const { id } = useParams();
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

    useEffect(() => {
        // Lógica para buscar os detalhes da dieta pelo ID e preencher o estado
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDiet({ ...diet, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar as alterações da dieta
        console.log(diet);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Dieta</h2>
            <input name="patient" placeholder="Paciente" value={diet.patient} onChange={handleChange} required />
            <input name="startDate" type="date" placeholder="Data de Início" value={diet.startDate} onChange={handleChange} required />
            <input name="endDate" type="date" placeholder="Data de Fim" value={diet.endDate} onChange={handleChange} required />
            <input name="meals" placeholder="Refeições (Horário e Dia da Semana)" value={diet.meals} onChange={handleChange} required />
            <input name="initialWeight" placeholder="Peso Inicial" value={diet.initialWeight} onChange={handleChange} required />
            <input name="height" placeholder="Altura" value={diet.height} onChange={handleChange} required />
            <input name="age" placeholder="Idade" value={diet.age} onChange={handleChange} required />
            <input name="gender" placeholder="Sexo" value={diet.gender} onChange={handleChange} required />
            <button type="submit">Salvar Alterações</button>
        </form>
    );
}

export default EditDiet;
