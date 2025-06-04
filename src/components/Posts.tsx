"use client";

import { BlogPost } from "@/types";
import PostList from "./PostList";
import { useState } from "react";

export default function Posts({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const search = query.toLowerCase();
    const inTitle = post.title.toLowerCase().includes(search);
    const inExcerpt = post.excerpt.toLowerCase().includes(search);
    const inTags = post.tags?.some((tag) => tag.toLowerCase().includes(search));

    return inTitle || inExcerpt || inTags;
  });
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artigos..."
        className="w-full p-3 mb-6 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-orange-500"
      />

      <div className="flex gap-2 flex-wrap mb-6">
        {[...new Set(posts.flatMap((p) => p.tags))].map((tag = "") => (
          <button
            key={tag}
            onClick={() => setQuery(tag)}
            className="px-3 py-1 rounded-full bg-zinc-800 text-orange-400 hover:bg-orange-500 hover:text-white transition"
          >
            #{tag}
          </button>
        ))}
      </div>

      <PostList posts={filteredPosts} />
    </>
  );
}
