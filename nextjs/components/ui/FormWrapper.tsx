"use client";

import { useState, type FormEvent, type ReactNode } from "react";

interface FormWrapperProps {
  children: ReactNode;
  successMessage?: string;
  className?: string;
}

export default function FormWrapper({
  children,
  successMessage = "Bedankt! We nemen zo snel mogelijk contact met je op.",
  className = "",
}: FormWrapperProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 py-12 ${className}`}>
        <span className="text-4xl">✅</span>
        <p className="text-lg font-semibold text-gray-900">{successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-linkedin font-medium hover:underline"
        >
          Nog een keer invullen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
