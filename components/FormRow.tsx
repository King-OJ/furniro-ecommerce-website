import { ComponentProps } from "react";

type FormRowProps = {
  name: string;
  type?: string;
  id?: string;
  title: string;
  textArea?: boolean;
  placeholder?: string;
  required?: boolean;
} & ComponentProps<"input">;

export default function FormRow({
  id,
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
        htmlFor={id}
        className="mb-2 block text-left text-sm font-semibold capitalize"
      >
        {title}
      </label>
      {textArea ? (
        <textarea
          required={required}
          id={id}
          name={name}
          className="textarea textarea-bordered w-full"
        />
      ) : (
        <input
          {...props}
          required={required}
          placeholder={placeholder}
          id={id}
          type={type}
          name={name}
          className="input input-bordered h-[2.5rem] w-full leading-[10px] md:h-[3rem] md:leading-[20px]"
        />
      )}
    </div>
  );
}
