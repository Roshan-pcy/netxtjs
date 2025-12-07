import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api/product";

import type { Product } from "@/lib/api/product";

export function useProducts() {
  return useQuery<Product[]>({ queryKey: ["product"], queryFn: fetchProducts });
}
