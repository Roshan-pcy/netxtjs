import { z } from "zod";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
});

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  const data = await response.json();

  return productSchema.array().parse(data);
}
