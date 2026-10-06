export default function Logo({ className = "" }: { className?: string }) {
  // Placeholder wordmark until the final logo arrives.
  return (
    <span className={`font-display tracking-[0.12em] text-white ${className}`}>
      CATALYSTORY<span className="text-red-bright">.</span>
    </span>
  );
}
