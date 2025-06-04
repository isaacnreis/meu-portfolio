export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 px-6 bg-zinc-900 text-white text-center"
    >
      <h2 className="text-2xl font-bold text-orange-400 mb-6">
        Entre em Contato
      </h2>
      <p className="mb-4">Tem um projeto ou quer conversar?</p>
      <a
        href="mailto:isaacreisn@gmail.com"
        className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold"
      >
        Fale comigo
      </a>
    </section>
  );
}
