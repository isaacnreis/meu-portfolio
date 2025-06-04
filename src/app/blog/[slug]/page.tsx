import { getAllPosts } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PostPage({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2 text-[#fe5412]">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{post.date}</p>
      <div className="prose prose-invert prose-lg max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>
    </main>
  );
}
