import Image from "next/image";

type BrandLockupProps = {
  /** Nome da frente: "Consultoria" | "Tributário" | "Educacional". */
  label: string;
  /** Cor do rótulo da frente (destaque da seção). */
  accent: string;
  /**
   * Marca a ser usada. Por padrão usa a assinatura branca do Grupo (`/logo-charao.png`).
   * Basta apontar para um PNG específico da frente (ex.: `/logo-charao-educacional.png`)
   * quando o arquivo estiver em /public.
   */
  markSrc?: string;
  /** Dimensões intrínsecas do arquivo (px) — mantém a proporção correta ao ampliar. */
  markWidth?: number;
  markHeight?: number;
  /**
   * A logo já traz o nome da frente embutido na arte (ex.: "Charão tributário").
   * Quando true, omite o divisor + rótulo de texto para não duplicar a informação.
   */
  markIncludesLabel?: boolean;
  className?: string;
};

/**
 * Assinatura de submarca: marca "Charão" + divisor + nome da frente.
 * Pensada para fundos escuros/coloridos (a marca é branca).
 */
export default function BrandLockup({
  label,
  accent,
  markSrc = "/logo-charao.png",
  markWidth = 512,
  markHeight = 256,
  markIncludesLabel = false,
  className = "",
}: BrandLockupProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Image
        src={markSrc}
        alt={`Charão ${label}`}
        width={markWidth}
        height={markHeight}
        className="h-auto w-48 object-contain md:w-64"
      />
      {!markIncludesLabel && (
        <>
          <span aria-hidden className="h-6 w-px bg-white/25 sm:h-7" />
          <span
            style={{ color: accent }}
            className="text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm"
          >
            {label}
          </span>
        </>
      )}
    </div>
  );
}
