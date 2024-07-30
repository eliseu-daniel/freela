import React, { useState } from 'react';

function ManageUser() {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar a nova senha
        console.log(passwords);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Trocar Senha</h2>
            <input name="currentPassword" type="password" placeholder="Senha Atual" onChange={handleChange} required />
            <input name="newPassword" type="password" placeholder="Nova Senha" onChange={handleChange} required />
            <input name="confirmPassword" type="password" placeholder="Confirmar Nova Senha" onChange={handleChange} required />
            <button type="submit">Salvar Nova Senha</button>
        </form>
    );
}

export default ManageUser;
