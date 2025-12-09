"use client";

import { useUpdateProduct } from "@/app/hooks/useUpdateProduct";

export default function UpdateButton() {
  const updateMutation = useUpdateProduct();

  return (
    <button
      onClick={() =>
        updateMutation.mutate({
          id: "1", // product id
          data: {
            title: "Updated Product Title",
            price: 999,
          },
        })
      }
    >
      Update
    </button>
  );
}
