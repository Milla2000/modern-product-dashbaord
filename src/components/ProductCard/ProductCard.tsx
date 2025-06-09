import { Product } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-8 group relative rounded-2xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-transparent hover:border-gray-200 dark:hover:border-zinc-700">
      {/* Image Section */}
      <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info Content */}
      <div className="space-y-3 mt-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="w-[90%] text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {product.description}
        </p>

        {/* Rating + Price */}
        <div className="flex flex-col items-start gap-2 pt-2 w-full">
          <div className="flex items-center text-yellow-500 space-x-1 bg-yellow-50 dark:bg-zinc-800 px-3 py-1 rounded-lg shadow-sm">
            <span>⭐</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
          </div>
          <span className="w-full text-center text-2xl font-extrabold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>

        {/* View Link */}
        <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Link
            href={`/products/${product.id}`}
            className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>

      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
