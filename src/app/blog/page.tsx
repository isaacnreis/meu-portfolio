import Posts from "@/components/Posts";
import { getAllPosts } from "@/lib/getPosts";

const allPosts = getAllPosts();

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#fe5412]">Blog</h1>
      <Posts posts={allPosts} />
    </main>
  );
}
