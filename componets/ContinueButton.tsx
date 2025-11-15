"use client";

export default function ContinueButton({
  onClick,
  disabled = false,
  label = "Continue",
}: {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full mt-6 py-3 rounded-xl font-semibold text-white shadow-lg
        ${
          disabled
            ? "bg-gray-700 cursor-not-allowed opacity-60"
            : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        }`}
    >
      {label}
    </button>
  );
}
