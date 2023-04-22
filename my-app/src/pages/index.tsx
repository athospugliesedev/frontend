import ArticleListItem from "@/components/ArticleListItem";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Sedgwick_Ave } from "next/font/google";

export default function index() {
  return (
    <>
      <Head>
        <title>Na rua • Home</title>
        <meta title="description" content="Seu portal de notícias sobre RAP" />
      </Head>

      <main className="w-[calc(100%_-_48px)] max-w-[1344px] mx-auto">
        <section>
          <h1 className="text-orange-500 text-lg mb-6 font-bold">
            Notícias recentes
          </h1>

          <div className="flex gap-4">
            <div className="noticia-principal flex-1 flex flex-row gap-4 p-6 rounded-xl bg-zinc-800 h-96">
              <div className="flex flex-col gap-3 w-1/2">
                <p className="text-6xl text-white font-bold">
                  Título da notícia título
                </p>
                <p className="text-base text-zinc-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  a augue nibh.
                </p>
              </div>
              <img
                src="https://static01.nyt.com/images/2020/07/31/business/30Oprah-Mag-01/merlin_175122966_5cf9786b-a03a-4575-a02e-8eaeb6c2a8c7-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                alt=""
                className="max-h-full object-none object-center w-1/2 rounded-xl"
              />
            </div>

            <div className="w-full max-w-[40%] pl-4 border-l border-l-white/10 flex flex-col gap-2">
              {[1, 2, 3].map((article) => {
                const now = new Date()
                return (
                  <ArticleListItem
                    date={now.toLocaleString("pt-br", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}
                    title="Jorge Viana muda estatuto da Apex por não falar inglês e para manter salário de R$ 65 mil"
                    description="Mudança libera permanência do comandante do órgão responsável por divulgar produtos brasileiros no exterior"
                    id={article}
                    slug={article.toString()}
                    key={article}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <section className="w-[calc(100%_-_48px)] max-w-[1344px] mx-auto">
        <h1 className="text-orange-500 text-lg mb-6 font-bold">
          Últimos lançamentos
        </h1>
        <div className="flex-1 flex flex-row gap-3 p-6  h-96">


          <div className="flex-1 flex flex-row gap-3 p-6 h-96">
            <h2 className="text-xl font-semibold text-zinc-300">abc</h2>
            <div className="w-full max-w-[40%] pl-4 border-l border-l-white/10 flex flex-col gap-2">
              aaaa
            </div>
          </div>
          <div className="w-full max-w-[39.5%] pl-4 border-l border-l-white/10 flex flex-col gap-2">
          <div style={{ borderRadius: '12px' }}>
      <iframe
        src="https://open.spotify.com/embed/playlist/3RcRK9HGTAm9eLW1LepWKZ?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>          </div>
        </div>

      </section>
    </>
  );
}
