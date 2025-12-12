"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchNotes, createNote } from "@/lib/api/api";
import { useNoteStore } from "@/app/store/useNoteStore";

export default function NotesPage() {
  const queryClient = useQueryClient();

  // Zustand store (local UI state)
  const { title, body, setTitle, setBody, reset } = useNoteStore();

  // ---------------------
  // FETCH LIST (GET)
  // ---------------------
  const notesQuery = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  // ---------------------
  // CREATE NOTE (POST)
  // ---------------------
  const createMutation = useMutation({
    mutationFn: (data: { title: string; body: string }) => createNote(data),
    onSuccess: () => {
      // refresh list after creating
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      reset(); // clear local Zustand inputs
    },
  });

  const submit = () => {
    createMutation.mutate({ title, body });
  };

  // ------- UI -------
  if (notesQuery.isLoading) return <p>Loading…</p>;
  if (notesQuery.isError) return <p>Error fetching data</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Notes (React Query + Zustand example)</h2>

      <h3>Create Note</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="body"
      />
      <br />
      <button onClick={submit}>Save</button>

      <h3>All Notes</h3>
      {notesQuery.data?.map((item: any) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: 8 }}>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
