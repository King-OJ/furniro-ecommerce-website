import { ComponentProps } from "react";

type FormRowProps = {
  name: string;
  type?: string;
  title: string;
  textArea?: boolean;
  placeholder?: string;
  required?: boolean;
} & ComponentProps<"input">;

export default function FormRow({
  name,
  type,
  title,
  textArea,
  placeholder,
  required,
  ...props
}: FormRowProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="mb-2 block text-left text-sm font-semibold capitalize"
      >
        {title}
      </label>
      {textArea ? (
        <textarea
          required={required}
          id={name}
          name={name}
          className="textarea textarea-bordered w-full"
        />
      ) : (
        <input
          {...props}
          required={required}
          placeholder={placeholder}
          id={name}
          type={type}
          name={name}
          className="input input-bordered w-full"
        />
      )}
    </div>
  );
}
