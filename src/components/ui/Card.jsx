import { cn } from "../../utils/cn";

export function Card({ className = "", children }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/5", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

