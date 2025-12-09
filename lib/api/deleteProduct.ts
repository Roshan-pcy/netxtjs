import axios from "axios";

export const deleteProduct = async (id: string) => {
  console.log("🗑️ DELETE REQUEST SENT:");
  console.log("👉 ID:", id);

  const response = await axios.delete(
    `https://fakestoreapi.com/products/${id}`
  );

  console.log("🟢 SERVER DELETE RESPONSE:", response.data);

  return response.data;
};
