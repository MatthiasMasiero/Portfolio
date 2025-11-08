import React from "react";
import { cn } from "../../utils/cn";

export function Button({
  asChild = false,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base = cn(
    "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium",
    variant === "secondary"
      ? "bg-white/10 border border-white/15"
      : "bg-white/20 border border-white/20",
    "hover:bg-white/25 transition-colors",
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(base, children.props.className),
      ...props,
    });
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}

