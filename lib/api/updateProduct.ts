import type { product } from "@/types/product";
import axios from "axios";

export const update = async (id: string, data: product) => {
  console.log("🔵 UPDATE REQUEST SENT:");
  console.log("👉 ID:", id);
  console.log("👉 Data you are sending:", data);

  const response = await axios.put(`https://your-api.com/products/${id}`, data);

  console.log("🟢 SERVER RESPONSE (UPDATED PRODUCT):", response.data);

  return response.data;
};
