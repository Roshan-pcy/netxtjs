"use client";
import { useProducts } from "@/app/hooks/useProducts";
export default function ProductPage() {
  const fallbackImage = "https://via.placeholder.com/150";
  const { data, isLoading, error, isError } = useProducts();
  const getImage = (src: string | null | undefined) => {
    if (!src || src.trim() === "" || src === "null" || src === "undefined") {
      return fallbackImage;
    }
    return src;
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <div className="flex justify-center flex-wrap">
      {" "}
      {data?.map((product) => (
        <div className="flex flex-col w-[250px] p-2 m-1 bg-amber-300 rounded-[5px] text-[10px] border border-black ">
          <div
            key={product.id}
            className="flex  pl-2.5 pr-2.5 pt-1 m-1    text-[10px] border border-black"
          >
            {" "}
            <strong>{product.title}</strong>
            <p>
              {"Price: "}
              {product.price}
            </p>
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded mb-2 border"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
          </div>
          <button className="bg-blue-600 text-white py-1 rounded text-[10px] mt-2 w-[60px] ml-auto mr-4 ">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}
