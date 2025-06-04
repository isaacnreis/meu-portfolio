import Link from "next/link";
import { BlogPost } from "@/types";

interface Props {
  posts: BlogPost[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="p-6 rounded-xl border border-gray-700 hover:border-[#fe5412] transition-colors"
        >
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="mt-2 text-gray-300">{post.excerpt}</p>
            {post.tags &&
              post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-zinc-800 text-orange-300 px-2 py-1 mr-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            <p className="mt-1 text-[#fe5412] font-medium">Ler mais →</p>
          </Link>
        </div>
      ))}
    </ul>
  );
}
