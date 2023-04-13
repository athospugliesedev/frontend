import { useState } from 'react'

function App() {

  const handleClick = () => {
    console.log('Botão clicado!');
    props.onClick();
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center space-x-10 mt-8 ">
        <div className="max-w-[640px]">
          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block text-center">Cadastre-se gratuitamente</strong>

            <form onSubmit={handleClick} className="flex flex-col gap-2 w-full">
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
              />

              <button
                type="submit"
                className="mt-4 bg-orange-500 uppercase py-4 rounded font-bold text-sm hover:bg-orange-700 transition-colors disabled:opacity-50"
                onSubmit={handleClick}
              >
                Entrar
              </button>
            </form>

          </div>


        </div>
        <div className="flex flex-col">
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Música da <strong className="text-orange-500">rua</strong>, para quem é da <strong className="text-orange-600">rua</strong>.
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin semper eleifend. Maecenas aliquam dui lorem, vitae congue magna bibendum sit amet. Sed diam justo, imperdiet nec eleifend non, egestas eget mi. Aenean eget condimentum massa. Nunc quis sem id felis imperdiet aliquam sed quis mauris.
          </p>
        </div>
      </div>

    </div>
  )
}

export default App
