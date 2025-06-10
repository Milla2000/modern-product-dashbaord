// src/components/ProductGrid/ProductGrid.tsx

import { Product } from "@/types/product";
import ProductCard from "../ProductCard/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-4">
      {products.map((product) => (
        <div className="rounded-lg p-13 gap-16" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
