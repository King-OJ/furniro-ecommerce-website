export default function FormRow({
  name,
  type,
  title,
  textArea,
}: {
  name: string;
  type?: string;
  title: string;
  textArea?: boolean;
}) {
  return (
    <div className="mb-8">
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {title}
      </label>
      {textArea ? (
        <textarea
          id={name}
          name={name}
          className="textarea textarea-bordered w-full"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          className="input input-bordered w-full"
        />
      )}
    </div>
  );
}
