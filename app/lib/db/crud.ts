// lib/db/crud.ts
import db from "./index";

// 🟢 Create or Update
export async function saveItem(key: string, value: any): Promise<void> {
  await db.setItem(key, value);
  console.log(`✅ Saved: ${key}`);
}

// 🔵 Read
export async function getItem<T>(key: string): Promise<T | null> {
  const data = await db.getItem<T>(key);
  console.log(`📦 Fetched ${key}:`, data);
  return data;
}

// 🟠 Read All (get all keys and values)
export async function getAllItems(): Promise<Record<string, any>> {
  const result: Record<string, any> = {};
  await db.iterate((value, key) => {
    result[key as string] = value;
  });
  console.log("📦 All items:", result);
  return result;
}

// 🔴 Delete
export async function deleteItem(key: string): Promise<void> {
  await db.removeItem(key);
  console.log(`❌ Deleted: ${key}`);
}

// ⚫ Clear all
export async function clearAll(): Promise<void> {
  await db.clear();
  console.log("🧹 Cleared all data");
}
