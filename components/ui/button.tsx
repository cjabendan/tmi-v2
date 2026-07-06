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
    "inline-flex px-5 py-3 items-center rounded-sm text-xs sm:text-base transition-all duration-200 min-h-0 min-w-0 cursor-pointer text-left whitespace-nowrap select-none";

  const variantClasses = {
    primary:
      "font-semibold items-center bg-action text-white hover:opacity-90 shadow-xs",
    secondary:
      "px-4 sm:gap-2 items-center border border-gray-200 dark:border-gray-700/80 bg-transparent text-black dark:text-white dark:hover:bg-zinc-100/12",
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
