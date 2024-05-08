"use client";

export default function Checkbox({
  text,
  checked,
}: {
  text: string;
  checked: boolean;
}) {
  return (
    <div className="flex items-center text-sm">
      <input
        checked={checked}
        onChange={() => console.log("checked")}
        type="checkbox"
        className="checkbox-secondary checkbox checkbox-sm mr-4 border-primaryColor hover:border-primaryColor"
      />
      {text}
    </div>
  );
}
