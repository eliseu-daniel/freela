export function Index() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-Form">
                    <form>
                        <h3>Bem-Vindo</h3>
                        <div className="form-input">
                            <input id="email" className="email" type="email" placeholder="E-mail" />
                        </div>
                        <div className="form-input">
                            <input id="password" className="password" type="password" placeholder="Senha" />
                        </div>
                        <button className="btnSub">Entrar</button>
                        <ul>
                            <a href="/home">Cadastre-se</a>
                        </ul>
                    </form>
                </div>
            </header>
        </div>
    );
}
