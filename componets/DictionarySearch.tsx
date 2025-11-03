"use client";

import { useState } from "react";

export default function DictionaryPage() {
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const onSearch = async () => {
    if (!word.trim()) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch("/api/dictionary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">
        🔍 Dictionary (English ⇆ Kannada)
      </h1>

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Search
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="mt-6 flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-blue-300">Fetching meaning…</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="mt-6 text-red-400 bg-red-900/30 px-3 py-2 rounded">
          ❌ {error}
        </p>
      )}

      {/* Result Card */}
      {result && (
        <div className="bg-gray-800 mt-6 p-5 rounded-lg shadow-lg w-full max-w-md">
          <p className="text-sm text-gray-400">
            Detected:{" "}
            <span className="text-green-400">{result.detectedLanguage}</span>
          </p>
          <h2 className="text-2xl font-semibold mt-2 text-blue-400">
            {result.englishWord}
          </h2>

          <div className="mt-3">
            <h3 className="font-semibold text-yellow-400">Meaning:</h3>
            <p className="mt-1">🇬🇧 {result.meaning.english}</p>
            <p className="mt-1">🇮🇳 {result.meaning.kannada}</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-yellow-400">Example:</h3>
            <p className="mt-1">🇬🇧 {result.examples.english}</p>
            <p className="mt-1">🇮🇳 {result.examples.kannada}</p>
          </div>
        </div>
      )}
    </div>
  );
}
