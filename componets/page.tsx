"use client";
import {
  saveItem,
  getItem,
  getAllItems,
  deleteItem,
  clearAll,
} from "@/app/lib/db/crud";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    async function testCRUD() {
      await saveItem("username", "pcy crysta");
      const user = await getItem<string>("username");
      console.log("Fetched user:", user);

      await saveItem("age", 22);
      await getAllItems();

      //   await deleteItem("age");
      //   await clearAll();
    }

    testCRUD();
  }, []);

  return <h1 className="text-xl p-10">IndexedDB CRUD Test</h1>;
}
