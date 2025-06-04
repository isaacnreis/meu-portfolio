import { getAllPosts } from "@/lib/getPosts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#fe5412]">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-6 rounded-xl border border-gray-700 hover:border-[#fe5412] transition-colors"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-white">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="mt-2 text-gray-300">{post.excerpt}</p>
              <p className="mt-1 text-[#fe5412] font-medium">Ler mais →</p>
            </Link>
          </div>
        ))}
      </ul>
    </main>
  );
}
