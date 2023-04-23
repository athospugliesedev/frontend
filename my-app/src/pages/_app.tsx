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
      href: "/",
    },
    {
      title: "Sobre",
      href: "sobre",
    },
    {
      title: "Blog",
      href: "blog",
    },
    {
      title: "Agenda",
      href: "agenda",
    },
    {
      title: "Contato",
      href: "contato",
    },

  ];



  return (
  <>
    <header className="mb-20 bg-zinc-900 p-6 border-b border-b-white/10 grid grid-cols-3 items-center sticky top-0">
    <strong style={sedgwick.style} className="text-5xl text-orange-400">

        Na rua
      </strong>

      <nav className="justify-self-center flex flex-row">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="uppercase py-2 px-3 rounded-md text-zinc-100 hover:text-zinc-300 hover:bg-white/5 transition-all duration-150 leading-tight"
            >
              {link.title}
            </Link>
          );
        })}
      </nav>

      <div className="justify-self-end flex flex-row gap-2">
        <button className="text-white leading-tight font-medium py-3 px-4 rounded-full ring-inset ring-1 ring-white/5 bg-white/5 hover:bg-white/10 active:opacity-80 transition-all duration-75">
          Log in
        </button>
        <button 
        className="text-white leading-tight font-medium py-3 px-4 rounded-full ring-inset ring-1 ring-orange-400 bg-orange-500 hover:ring-orange-500 hover:bg-orange-600 active:opacity-80 transition-all duration-75 cursor-pointer">
         <Link
         href='/signArea'>
          Registre-se
         </Link>
        </button>
      </div>
    </header>

    <Component {...pageProps} />

    <footer className="mt-20 px-6 py-12 border-t border-t-white/10">
      <nav className="w-full max-w-[600px] mx-auto flex gap-3 justify-center items-center">
        <Link
          href="/"
          className="p-4 text-base text-zinc-200 hover:text-zinc-300"
        >
          Sobre
        </Link>
        <Link
          href="/"
          className="p-4 text-base text-zinc-200 hover:text-zinc-300"
        >
          Agenda
        </Link>
        <Link
          href="/"
          className="p-4 text-base text-zinc-200 hover:text-zinc-300"
        >
          Contato
        </Link>
      </nav>

      <div className="grid grid-cols-3 mt-8">
        <p className="self-end justify-self-start text-zinc-300 text-sm max-w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          augue nibh.
        </p>

        <strong
        style={sedgwick.style}
        className="justify-self-center self-top text-8xl text-orange-400"
        >
          Na rua
        </strong>

        <p className="self-end justify-self-end text-zinc-300 text-sm max-w-[50%]">
          Cras sollicitudin facilisis interdum. Cras vitae elementum ante.
        </p>
      </div>
    </footer>
  </>
  )
}
