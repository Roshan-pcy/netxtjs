"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { update } from "@/lib/api/updateProduct";
import type { product } from "@/types/product";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: product }) =>
      update(id, data),

    onSuccess: (updatedItem) => {
      console.log("🚀 MUTATION SUCCESS (UI LEVEL):", updatedItem);

      // Re-fetch products to update UI
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: (error) => {
      console.log("❌ MUTATION ERROR:", error);
      alert("Failed to update product");
    },
  });
};
