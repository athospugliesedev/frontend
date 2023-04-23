import ArticleListItem from "@/components/ArticleListItem";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Sedgwick_Ave } from "next/font/google";

interface News {
  id: string;
  title: string;
  description: string;
  url_image: string;
}

export default function index() {
  const news = {
    "id": "01",
    "title": "Recife Trap Festival: dois dias com nomes de peso do rap e do hip hop",
    "description": "Festival acontece nesta sexta-feira (21) e no sábado (22) na área externa do Centro de Convenções, em Olinda.",
    "url_image": "https://i0.wp.com/www.rapdab.com.br/wp-content/uploads/2021/01/Teto-matue.jpg?fit=1200%2C750&ssl=1"
  };


  return (
    <>
      <Head>
        <title>Na Rua • Home</title>
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
                <p className="text-4xl text-white font-bold">
                  {news.title}
                </p>
                <p className="text-base text-zinc-300">
                  {news.description}
                </p>
              </div>
              <img
                src={news.url_image}
                alt=""
                className="max-h-full object-fill object-center w-1/2 rounded-xl"
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
                    title="Jovem Creator lança o single, Te Prometi com participação de Cadence"
                    description="Escute o novo lançamento do jovem talento jaboatonense"
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
        <h1 className="text-orange-500 text-lg mb-6 font-bold mt-6">
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
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
