"use client";

import { useDeleteProduct } from "@/app/hooks/useDeleteProduct";

export default function DeleteButton() {
  const deleteMutation = useDeleteProduct();

  return (
    <button
      style={{ color: "red" }}
      onClick={() => deleteMutation.mutate("1")} // product id
    >
      Delete
    </button>
  );
}
