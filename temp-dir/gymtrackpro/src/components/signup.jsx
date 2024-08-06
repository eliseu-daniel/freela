import React from "react";

export function Signup() {
    return (
        <div className="signup">
            <header className="App-header">
                <div className="App-Form">
                    <form>
                        <h3>Cadastre-se</h3>
                        <div className="form-input">
                            <input id="name" className="name" type="text" placeholder="Nome Completo" />
                        </div>
                        <div className="form-input">
                            <input id="email" className="email" type="email" placeholder="E-mail" />
                        </div>
                        <div className="form-input">
                            <input id="password" className="password" type="password" placeholder="Senha" />
                        </div>
                        <button className="btnSub">Cadastrar</button>
                    </form>
                </div>
            </header>
        </div>
    )
}