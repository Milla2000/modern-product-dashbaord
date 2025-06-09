export const dynamic = "force-dynamic";

import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params;
  const product = await fetchProductById(resolvedParams.id);

  if (!product?.id) {
    return notFound(); // ✅ Show custom 404 page
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:w-1/2 rounded shadow mb-4"
      />
      <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
      <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>
      <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
    </div>
  );
}
