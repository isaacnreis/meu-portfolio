export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-fundoPersonalizado from-50% to-zinc-fundoPersonalizado/0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Isaac Nas</h1>
      <p className="text-lg md:text-xl max-w-2xl text-zinc-300">
        Desenvolvedor Full Stack com foco em experiências Front-end criativas,
        modernas e acessíveis.
      </p>
      <div className="mt-6">
        <a
          href="#projects"
          className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
        >
          Ver projetos
        </a>
      </div>
    </section>
  );
}
