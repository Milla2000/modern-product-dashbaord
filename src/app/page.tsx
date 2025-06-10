"use client";

import { useState, useMemo } from "react";
import { useProducts } from "@/lib/useProducts";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import SearchBar from "@/components/SearchBar/SearchBar";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";

export default function Home() {
  const { data: products, isLoading, isError } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = useMemo(() => {
    if (!products) return [];

    return products.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    if (!products) return [];
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 mt-10">Error loading products.</p>
    );

  return (
    <div className="py-6 space-y-4">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      <ProductGrid products={filtered} />
    </div>
  );
}
