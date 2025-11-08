export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white/5 border-white/10 backdrop-blur">
      {children}
    </span>
  );
}

