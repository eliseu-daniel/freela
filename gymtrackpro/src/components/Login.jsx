import React from 'react'

export function Login() {
    return (
        <div className="flex justify-center items-center h-screen relative bg-slate-900">
            <header className="bg-slate-700 rounded-xl w-80">
                <div className='flex justify-center flex-col gap-2 m-4 '>
                    <h3 className='flex justify-center text-white text-3xl'>Bem-Vindo</h3>
                    <form action="home" method="post">   
                    <div className="flex flex-col gap-4 ">
                        <input className="rounded-md p-1 email" id="email" type="email" placeholder="E-mail" />
                        <input className="rounded-md p-1 password" id="password" type="password" placeholder="Senha" />
                    </div>
                    <div className='flex justify-center '>
                        <button className=" rounded-md bg-zinc-600 hover:bg-cyan-500 p-2 text-cyan-300" href="./home">Entrar</button>
                    </div>
                    </form>
                    <div className='flex justify-center'>
                        <ul >
                            <a className='p-1 rounded-md text-cyan-600 hover:bg-cyan-500' href="./signup">Cadastre-se</a>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}