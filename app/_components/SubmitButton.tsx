"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: React.ReactNode;
  pendingLabel: string;
}

export default function SubmitButton({
  children,
  pendingLabel,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium 
                 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 
                 focus:ring-gray-500 focus:border-transparent
                 transition duration-150 ease-in-out
                 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
