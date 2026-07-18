import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "transparent" | "solid" | "default";
  icon?: ReactNode;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex justify-center items-center px-6 py-3 rounded-sm text-xs sm:text-base transition-all duration-200 min-h-0 min-w-0 cursor-pointer text-left whitespace-nowrap select-none gap-2";

  const variantClasses = {
    primary:
      "text-white font-medium bg-action text-white hover:opacity-90 shadow-xs",
    secondary: "font-medium bg-secondary text-white",
    transparent:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium rounded-lg hover:bg-white/20",
    solid:
      "bg-white text-tertiary font-semibold rounded-lg shadow-lg hover:bg-opacity-90",
    default: "text-gray p-0",
  }[variant];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && variant === "primary" && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}

      <span className="block truncate">{children}</span>
      {icon && variant !== "primary" && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}
    </button>
  );
}
