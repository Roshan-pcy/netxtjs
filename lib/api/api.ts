// lib/api.ts

// fake API endpoint for example (replace with your real URL)
const BASE_URL = "https://jsonplaceholder.typicode.com";

// ---- FETCH (GET) ----
export async function fetchNotes() {
  const res = await fetch(`${BASE_URL}/posts?_limit=5`);
  if (!res.ok) throw new Error("Failed to fetch notes");
  return res.json(); // returns array
}

// ---- CREATE (POST) ----
export async function createNote(data: { title: string; body: string }) {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create note");
  return res.json();
}
