export default function ShareButtons({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="flex gap-3 mt-6">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Compartilhar no Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline"
      >
        Compartilhar no LinkedIn
      </a>
    </div>
  );
}
