"use client";

interface InputFooterProps {
  value: string;
  error?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label: string;
  name: string;
  isRequired?: boolean;
}

const InputFooter = ({
  value,
  error,
  handleInputChange,
  className,
  label,
  name,
  isRequired,
}: InputFooterProps) => {
  return (
    <div
      className={`w-full max-sm:pb-2 pt-4 overflow-hidden relative ${className}`}
    >
      <div className="w-full relative">
        <input
          type="text"
          name={name}
          id={name}
          placeholder=" "
          className="peer w-full bg-transparent text-base sm:text-lg text-white border-b border-white placeholder-transparent !h-8 sm:h-12 relative z-0 focus:outline-none"
          value={value}
          onChange={handleInputChange}
        />

        <label
          htmlFor={name}
          className="leading-none absolute left-0 top-[-16px] font-satoshi uppercase tracking-widest text-white transition-all duration-300 ease-in-out peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-[10px] sm:peer-focus:text-xs"
        >
          {label} {isRequired && <span className="text-white">*</span>}
        </label>
      </div>
      {error && (
        <span className="text-white text-xs lg:text-sm block mt-1 text-left italic">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputFooter;
