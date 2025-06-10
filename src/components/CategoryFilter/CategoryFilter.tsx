"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="top-8 right-8 w-[220px] z-20 mb-6">
      <label
        className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
        htmlFor="category-filter"
      >
        Filter by Category
      </label>
      <div className="relative">
        <select
          id="category-filter"
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full appearance-none bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg px-4 py-2 pr-10 text-gray-700 dark:text-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 dark:text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
