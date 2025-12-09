"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/lib/api/deleteProduct";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),

    onSuccess: () => {
      console.log("🚀 DELETE SUCCESS");

      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: (error) => {
      console.log("❌ DELETE FAILED:", error);
      alert("Failed to delete product");
    },
  });
};
