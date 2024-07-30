import React, { useState } from 'react';

function PatientForm() {
    const [patient, setPatient] = useState({
        name: '',
        birthDate: '',
        email: '',
        plan: '',
        trainingType: '',
        dietType: '',
        trainingDays: '',
        allergies: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar o cadastro do paciente
        console.log(patient);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar Paciente</h2>
            <input name="name" placeholder="Nome" onChange={handleChange} required />
            <input name="birthDate" type="date" placeholder="Data de Nascimento" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input name="plan" placeholder="Plano Escolhido" onChange={handleChange} required />
            <input name="trainingType" placeholder="Tipo de Treino" onChange={handleChange} required />
            <input name="dietType" placeholder="Tipo de Dieta" onChange={handleChange} required />
            <input name="trainingDays" placeholder="Dias de Treino" onChange={handleChange} required />
            <input name="allergies" placeholder="Alergias" onChange={handleChange} />
            <button type="submit">Salvar Paciente</button>
        </form>
    );
}

export default PatientForm;
