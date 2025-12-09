"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFunction } from "@/lib/api/addproduct";
import type { product } from "@/types/product";

export default function PostProductPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: product) => addFunction(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });

      console.log("Product added successfully!");
      console.log("Server returned:", data);
      setTitle("");
      setPrice("");
    },
    onError: (error) => {
      console.log("Error happened:", error);
      alert("Something went wrong while adding the product!");
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 Log what user typed
    console.log("Form Submitted:");
    console.log("Title:", title);
    console.log("Price:", price);

    mutation.mutate({ title, price: Number(price) });
  };
  return (
    <>
      <h1>Add product </h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </>
  );
}
