import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "default";
  href?: string;
  icon?: ReactNode;
}

export default function Links({
  variant = "primary",
  icon,
  children,
  href = "#",
  className = "",
  ...props
}: LinkProps) {
  const baseClasses =
    "inline-flex text-sm sm:text-base transition-all duration-200 min-h-0 min-w-0 cursor-pointer text-left whitespace-nowrap select-none leading-none";

  const variantClasses = {
    primary: "text-white/60 hover:text-white/100",
    secondary: "text-white/60 hover:text-white/100",
    default: "text-gray-600/80 font-medium hover:text-primary",
  }[variant];

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && variant === "primary" && (
        <span className="shrink-0 flex items-center mr-2">{icon}</span>
      )}

      <span className="block truncate">{children}</span>
      {icon && (variant === "secondary" || variant === "default") && (
        <span className="shrink-0 flex items-center ml-2">{icon}</span>
      )}
    </Link>
  );
}
