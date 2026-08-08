export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm glass-chip">
      {children}
    </span>
  );
}

