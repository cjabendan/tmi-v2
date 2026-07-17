import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "default";
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
    "inline-flex ustify-center items-center px-4 py-2 items-center rounded-sm text-xs sm:text-sm transition-all duration-200 min-h-0 min-w-0 cursor-pointer text-left whitespace-nowrap select-none";

  const variantClasses = {
    primary:
      "font-semibold bg-action text-white hover:opacity-90 shadow-xs",
    secondary:
      "font-semibold bg-secondary text-white",
    default:
      "text-gray p-0",
  }[variant];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && variant !== "default" && (
        <span className="shrink-0 flex items-center">
          {icon}
        </span>
      )}

      <span className="block truncate items-center">
        {children}
      </span>
      {icon && variant === "default" && (
        <span className="shrink-0 flexWS">
          {icon}
        </span>
      )}
    </button>
  );
}
