import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060212] text-white px-4">
      <h1 className="text-6xl font-bold text-[#fe5412] mb-4">404</h1>
      <p className="text-xl text-center mb-6">
        Ops! A página que você está procurando não foi encontrada.
      </p>
      <Link
        href="/"
        className="bg-[#fe5412] px-6 py-2 rounded-full text-white hover:bg-[#fc1a1a] transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
