"use client";

import { useRef, useState, useEffect } from "react";
import localforage from "localforage";
import { Button } from "@/components/ui/button";

export default function Input() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [textdata, setData] = useState<string>("");
  const [savedItems, setSavedItems] = useState<
    { key: string; value: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editKey, setEditKey] = useState<string | null>(null);

  const handleSave = async () => {
    const value = inputRef.current?.value ?? "";

    // ❌ Don't allow empty strings
    if (!value.trim()) {
      alert("Please enter something");
      return;
    }

    try {
      // ✅ Update if editing
      if (editKey) {
        await localforage.setItem(editKey, value);
        setEditKey(null);
      } else {
        // ✅ Create new item
        const key = `text-${Date.now()}`;
        await localforage.setItem(key, value);
      }

      setData(value);
      inputRef.current!.value = "";
      await loadAllItems();
    } catch (err) {
      console.error(err);
      alert("Error saving data!");
    }
  };

  const loadAllItems = async () => {
    setLoading(true);

    const items: { key: string; value: string }[] = [];
    await localforage.iterate((value, key) => {
      items.push({ key, value: value as string });
    });

    // newest first
    items.sort((a, b) => (a.key < b.key ? 1 : -1));
    setSavedItems(items);

    setLoading(false);
  };

  const deleteOne = async (key: string) => {
    try {
      await localforage.removeItem(key);

      // if deleting the item currently being edited
      if (editKey === key) {
        setEditKey(null);
        inputRef.current!.value = "";
      }

      await loadAllItems();
    } catch (err) {
      console.error(err);
      alert("Error deleting!");
    }
  };

  const editOne = async (key: string) => {
    const value = await localforage.getItem<string>(key);
    if (value && inputRef.current) {
      inputRef.current.value = value;
      setEditKey(key);
      setData(value);
    }
  };

  useEffect(() => {
    loadAllItems();
  }, []);

  return (
    <div className="p-6">
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter text"
        className="w-64 h-10 bg-amber-50 m-2 pl-4 border rounded-md"
      />

      <Button onClick={handleSave}>{editKey ? "Update" : "Save"}</Button>

      {editKey && (
        <span className="ml-3 text-blue-600 font-semibold">
          Editing: {editKey}
        </span>
      )}

      <p className="mt-4 font-semibold">Last saved: {textdata}</p>

      <h2 className="mt-6 text-lg font-bold">🗂 All Saved Data</h2>

      {loading ? (
        <p className="text-gray-500 mt-2">⏳ Loading...</p>
      ) : (
        <ul className="mt-2 ml-5 space-y-2">
          {savedItems.map((item) => (
            <li
              key={item.key}
              className="flex flex-col sm:flex-row justify-between bg-gray-100 p-2 rounded w-full break-words"
            >
              <span>
                <strong>{item.key}</strong>: {item.value}
              </span>

              <div className="space-x-2">
                <button
                  onClick={() => editOne(item.key)}
                  className="bg-green-500 px-2 py-1 rounded text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteOne(item.key)}
                  className="bg-red-400 px-2 py-1 rounded text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
