import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  link?: string;
  icon?: ReactNode;
}

export default function Links({
  variant = "primary",
  icon,
  children,
  link = "#",
  className = "",
  ...props
}: LinkProps) {
  const baseClasses =
    "inline-flex items-center rounded-sm text-sm sm:text-base transition-all duration-200 min-h-0 min-w-0 cursor-pointer text-left whitespace-nowrap select-none";

  const variantClasses = {
    primary: "text-gray-600/80 font-medium hover:text-primary",
    secondary: "text-white/80 hover:opacity-90",
  }
  [variant];

  return (
    <Link
      href={link}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && variant !== "secondary" && (
        <span className="shrink-0 flex items-center mr-2">{icon}</span>
      )}

      <span className="block truncate items-center">{children}</span>

      {icon && variant === "secondary" && (
        <span className="shrink-0 flex items-center ml-2">{icon}</span>
      )}
    </Link>
  );
}
