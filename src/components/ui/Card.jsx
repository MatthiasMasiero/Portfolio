import { cn } from "../../utils/cn";

export function Card({ className = "", children, ...props }) {
  return (
    <div className={cn("glass-card", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={cn("relative z-10", className)}>{children}</div>;
}

