type ImagePlaceholderProps = {
  label?: string;
  gradient: string;
  className?: string;
};

/** Placeholder visual até as fotos reais serem adicionadas em /public. */
export default function ImagePlaceholder({
  label,
  gradient,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
    </div>
  );
}
