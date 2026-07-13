import Image from "next/image";

type LogoProps = {
  /** Versão escura para fundos claros (header após scroll). */
  dark?: boolean;
  className?: string;
};

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label="Grupo Charão — voltar ao início"
      className={`inline-flex shrink-0 bg-transparent ${className}`}
    >
      <Image
        src="/logo-grupo-charao.png"
        alt="Grupo Charão"
        width={966}
        height={258}
        priority
        className={`h-9 w-auto bg-transparent sm:h-10 ${dark ? "brightness-0" : ""}`}
      />
    </a>
  );
}
