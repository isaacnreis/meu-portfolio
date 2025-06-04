export default function Education() {
  return (
    <section className="py-16 px-6 bg-zinc-950 text-white">
      <h2 className="text-2xl font-bold text-orange-400 mb-8 text-center">
        Formações
      </h2>
      <div className="space-y-6">
        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-lg font-semibold">
            Análise e Desenvolvimento de Sistemas
          </h3>
          <p className="text-sm text-zinc-400">
            Centro Universitário UniFatecie - Jun 2022 a Jul 2024
          </p>
        </div>
        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-lg font-semibold">
            Programa Oracle Next Education Front End
          </h3>
          <p className="text-sm text-zinc-400">
            Alura/Oracle - Nov 2022 a Abr 2023
          </p>
        </div>
      </div>
    </section>
  );
}
