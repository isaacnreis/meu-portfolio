export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-zinc-200 dark:bg-zinc-800 text-center">
      <p className="text-sm text-zinc-700 dark:text-zinc-300">
        &copy; {new Date().getFullYear()} Isaac Reis. Todos os direitos
        reservados.
      </p>
      <div className="mt-2 text-sm">
        <a
          href="https://github.com/isaacnreis"
          className="text-orange-600 dark:text-orange-400 hover:underline"
          target="_blank"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://linkedin.com/in/isaacnreis"
          className="text-orange-600 dark:text-orange-400 hover:underline"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
