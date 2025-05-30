"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-4 bg-zinc-100 dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre mim
        </motion.h2>
        <motion.p
          className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sou um desenvolvedor{" "}
          <strong className="text-orange-500">Full Stack</strong> com foco e
          paixão por <strong className="text-orange-500">Front-End</strong>.
          Gosto de transformar ideias criativas em interfaces modernas,
          acessíveis e bem estruturadas. Tenho experiência com{" "}
          <strong>React, Vue, JavaScript/TypeScript, Node.js e PHP</strong>, e
          estou sempre em busca de desafios onde posso aplicar boas práticas de
          código, performance e design. Além de programar, gosto de compartilhar
          conhecimento, aprender continuamente e participar de projetos que
          envolvam arte, tecnologia e inovação.
        </motion.p>
      </div>
    </section>
  );
}
