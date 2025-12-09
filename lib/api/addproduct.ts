import { product } from "@/types/product";

export const addFunction = async (data: product): Promise<product> => {
  const responce = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!responce.ok) throw new Error("Failed to add product");

  return responce.json();
};
