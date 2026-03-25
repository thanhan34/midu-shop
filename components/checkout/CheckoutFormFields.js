/* ─────────────────────────────────────────────
   CheckoutFormFields
   Shared UI primitives for checkout forms —
   FormInput · FormTextarea
   Design: refined luxury inputs, calm + premium.
   Uppercase micro-labels · pastel focus ring.
───────────────────────────────────────────── */

/* ── Shared input classes ─────────────────── */
const inputClass = `
  w-full px-4 py-3
  bg-white border border-[#EADDD3]
  text-[#1F1A17] text-sm font-light
  placeholder:text-[#C4B5AE]
  rounded-xl outline-none
  transition-all duration-200
  focus:border-[#EFA67A] focus:ring-2 focus:ring-[#EFA67A]/10
  hover:border-[#D5C8C0]
`.trim();

/* ── FormInput ────────────────────────────── */
export function FormInput({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  autoComplete,
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className="text-[#5E5148] text-[11px] font-medium uppercase tracking-[0.1em]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#EFA67A] normal-case font-normal not-italic">*</span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  );
}

/* ── FormTextarea ─────────────────────────── */
export function FormTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows = 4,
  optional = false,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[#5E5148] text-[11px] font-medium uppercase tracking-[0.1em]"
      >
        {label}
        {optional && (
          <span className="ml-1.5 text-[#8B7D74] text-[10px] normal-case font-light tracking-normal">
            — optional
          </span>
        )}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${inputClass} resize-none`}
      />
    </div>
  );
}
