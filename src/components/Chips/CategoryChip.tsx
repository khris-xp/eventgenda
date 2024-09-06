interface Props {
  category: string;
}

export default function CategoryChip(category: Props) {
  return (
    <div className="p-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-2xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
      <span className="inline-flex items-center p-1 rounded-full text-xs font-medium bg-indigo-600 text-white" />
      {category.category}
    </div>
  );
}
