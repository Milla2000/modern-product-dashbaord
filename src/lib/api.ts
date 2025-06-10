import { Product, ProductResponse } from '@/types/product';

export const fetchProducts = async (): Promise<Product[]> => {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data: ProductResponse = await res.json();
    return data.products;
};

export const fetchProductById = async (id: string | number): Promise<Product> => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch product with ID ${id}`);
    }
    return res.json();
};
