type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

export function Field({ label, name, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-[8px] border border-black/12 bg-[#f7f7f7] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/32 focus:border-black focus:bg-white"
      />
    </div>
  );
}
