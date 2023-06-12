import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {
  Sedgwick_Ave_Display as SedgwickAveDisplay,
} from "next/font/google";
import {
  Inter
} from "next/font/google";
import Link from 'next/link';

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sedgwick = SedgwickAveDisplay({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const links = [
    {
      title: "Home",
      href: "",
    },
  ];



  return (
  <>
    <header className="mb-20 bg-zinc-900 p-6 border-b border-b-white/10 grid grid-cols-3  justify-between sticky top-0">


      {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={`/${link.href}`}
            >
<strong style={sedgwick.style} className="text-5xl text-orange-400">

Na rua
</strong>
    </Link>
          );
        })}

      <div className="justify-self-end flex flex-row gap-2">

      
         <Link
                 className="text-white leading-tight font-medium py-3 px-4 rounded-full ring-inset ring-1 ring-orange-400 bg-orange-500 hover:ring-orange-500 hover:bg-orange-600 active:opacity-80 transition-all duration-75 cursor-pointer"

         href='/signArea'>
          Área do Usuário
         </Link>
      </div>
    </header>
<AuthProvider>
    <Component {...pageProps} />
</AuthProvider>
    <footer className="mt-20 px-6 py-12 border-t border-t-white/10">
      <nav className="w-full max-w-[600px] mx-auto flex gap-3 justify-center items-center">
        <p
          className="text-base text-zinc-200 hover:text-zinc-300"
        >
          Feito com 🧡 por</p>
        <Link
          href="https://github.com/athospugliesedev"
          target='_blank'
          className="text-base text-zinc-200 hover:text-zinc-300"
        >
          Athos
        </Link>
        <p className='text-base text-zinc-200 hover:text-zinc-300'>e</p>
        <Link
          href="https://github.com/Saulo-Ferraz"
          target='_blank'
          className="text-base text-zinc-200 hover:text-zinc-300"
        >
          Saulo
        </Link>
      </nav>

      <div className="grid grid-cols-3 mt-8">
        <p className="self-end justify-self-start text-zinc-300 text-sm max-w-[50%]">
          2023 © Todos direitos reservados
        </p>

        <strong
        style={sedgwick.style}
        className="justify-self-center self-top text-8xl text-orange-400"
        >
          Na rua
        </strong>

        <p className="self-end justify-self-end text-zinc-300 text-sm max-w-[50%]">
          Projeto de Front-end • Universidade Católica de Pernambuco
        </p>
      </div>
    </footer>
  </>
  )
}
