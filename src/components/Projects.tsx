"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  link: string;
  image?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "DoIt - Gerenciador de Tarefas",
    description:
      "DoIt é uma aplicação fullstack desenvolvida com Nuxt.js 3 (frontend) e Node.js + Express + MySQL (backend). Seu objetivo é oferecer um ambiente simples e eficiente para gerenciar tarefas, permitindo criação, edição, exclusão e filtragem de tarefas vinculadas a um usuário autenticado via JWT. A aplicação é responsiva, acessível e otimizada para SEO, oferecendo uma experiência fluída e moderna.",
    link: "https://doit-jade.vercel.app/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/doIt",
  },
  {
    title: "VortexAdmin",
    description:
      "VortexAdmin é um painel administrativo moderno e interativo, desenvolvido com Vue 3 + Vite + TypeScript. O objetivo é fornecer uma plataforma eficiente para gerenciar usuários, produtos e métricas com gráficos interativos e suporte a temas Dark/Light.",
    link: "https://vortexadmin.netlify.app/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/vortexadmin",
  },
  {
    title: "ReactStore",
    description:
      "React Store é um projeto de e-commerce moderno e responsivo desenvolvido com React + Vite, com integração de pagamentos via Stripe e gerenciamento de estado com Zustand. O objetivo foi criar um sistema funcional e bem estruturado, seguindo boas práticas de desenvolvimento.",
    link: "https://react-store-lyart.vercel.app/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/react-store",
  },
  {
    title: "CineScope",
    description:
      "Projeto realizado para pratica de React + Vite. O projeto é um catálogo de filmes onde é possível navegar entre as pagina de home e favoritos, além de poder pesquisar os filmes pelos seus detalhes. Usando React com Vite, Context API para gerenciar o estado global, axios para pegar os dados dos filmes pela API do TMDB e local storage para salvar os marcados como favoritos.",
    link: "https://cine-scope-mu.vercel.app/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/cineScope",
  },
  {
    title: "Portfólio Criativo",
    description: "Landing page interativa com animações e foco em performance.",
    link: "https://isaacnreis.github.io/portfolio-n/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/portfolio-n",
  },
  {
    title: "Text Encoder/Decoder",
    description:
      "Primeiro challenge Alura no programa Oracle Next Education, com objetivo de criar uma aplicação capaz de codificar e decodificar texto digitado. Foi usado HTML, CSS e JavaScript para realização deste projeto.",
    link: "https://isaacnreis.github.io/alura-challenge-one/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/alura-challenge-one",
  },
  {
    title: "Orçamento Pessoal",
    description:
      "É possível cadastrar novas despesas e realizar a consulta, para cadastrar realizando validações e apresentando retorno de sucesso e erro. Foi usado HTML, CSS e JavaScript com a manipulação do local storage para realização deste projeto.",
    link: "https://isaacnreis.github.io/orcamento-pessoal/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/orcamento-pessoal",
  },
  {
    title: "Pokedex JavaScript",
    description:
      "Projeto realizado para estudo de JavaScript e integração com API Poke-API.Tecnologias utilizadas: JavaScript, HTML, CSS, Poke-API.",
    link: "https://js-developer-pokedex-isaacnreis.vercel.app/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/js-developer-pokedex",
  },
  {
    title: "Jogo da Velha",
    description:
      "Projeto realizado para estudo de JavaScript e manipulação de DOM. Tecnologias utilizadas: HTML, CSS e JavaScript.",
    link: "https://isaacnreis.github.io/jogodavelha/",
    image: "/images/teste.jpg",
    repo: "https://github.com/isaacnreis/jogodavelha",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      const fullHeight = containerRef.current.scrollHeight;
      setContainerHeight(showAll ? fullHeight : undefined);
    }
  }, [showAll]);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto relative">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Projetos em Destaque
      </motion.h2>

      <div
        className="relative transition-all duration-700 ease-in-out overflow-hidden"
        style={{ maxHeight: showAll ? containerHeight : "1250px" }}
        ref={containerRef}
      >
        <div
          className={`grid md:grid-cols-2 gap-8 transition-opacity duration-700 ${
            showAll ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-zinc-800 hover:border-orange-500 transition bg-zinc-900"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-zinc-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Ver Projeto
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white"
                    >
                      Repositório
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-fundoPersonalizado via-fundoPersonalizado/80 to-transparent pointer-events-none" />
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-medium rounded-full transition-all duration-300"
        >
          {showAll ? "Ver menos" : "Ver todos os projetos"}
          <span
            className={`transition-transform duration-300 ${
              showAll ? "rotate-0" : "rotate-180"
            }`}
          >
            ^
          </span>
        </button>
      </div>

      <article className="mt-20 text-center text-zinc-300 max-w-3xl mx-auto">
        <motion.h3
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Explore mais no GitHub
        </motion.h3>
        <motion.p
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Você pode ver esses e outros projetos no meu GitHub. Sinta-se à
          vontade para explorar, clonar, e contribuir. Estou sempre
          desenvolvendo algo novo!
        </motion.p>
        <a
          href="https://github.com/isaacnreis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Acessar meu GitHub
        </a>
      </article>
    </section>
  );
}
