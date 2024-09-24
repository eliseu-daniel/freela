import React from "react";

export function Signup() {
    return (
        <div className="flex justify-center items-center h-screen relative bg-slate-900">
            <header className="bg-slate-700 rounded-xl w-80">
                <div className="flex justify-center flex-col gap-2 m-4 ">
                    <h3 className='flex justify-center text-white text-3xl'>Cadastre-se</h3>
                    <form action="./">
                        <div className="flex flex-col gap-4">
                            <input  id="name" className="rounded-md p-1 name" type="text" placeholder="Nome Completo" />
                            <input id="email" className="rounded-md p-1 email" type="email" placeholder="E-mail" />
                            <input id="password" className="rounded-md p-1 password" type="password" placeholder="Senha" />
                        </div>
                        <div className='flex justify-center '>
                            <button className="rounded-md bg-zinc-600 hover:bg-cyan-500 p-2 text-cyan-300 btnSub">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    )
}