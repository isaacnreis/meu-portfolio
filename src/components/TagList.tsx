export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
