import { getAllPosts } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PostPage({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  const url = typeof window !== "undefined" ? window.location.href : "";

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2 text-[#fe5412]">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{post.date}</p>
      <div className="prose prose-invert prose-lg max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(
            post.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400"
        >
          Compartilhar no Twitter
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-400"
        >
          Compartilhar no LinkedIn
        </a>
      </div>
    </main>
  );
}
