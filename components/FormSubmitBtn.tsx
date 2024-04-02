"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitBtnProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitBtn({
  children,
  className,
  ...props
}: FormSubmitBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      className={`btn px-8 ${className}`}
      disabled={pending}
    >
      {pending && <span className="loading loading-dots loading-xs" />}
      {children}
    </button>
  );
}
