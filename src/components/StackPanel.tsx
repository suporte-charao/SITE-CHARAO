"use client";

import { useEffect, useRef, useState } from "react";

type StackPanelProps = {
  id: string;
  /** Trava no fim da leitura para a página seguinte deslizar por cima. */
  pinned?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Painel da paginação vertical entre as empresas do grupo.
 *
 * Quando `pinned`, usa position:sticky com deslocamento calculado
 * (min(0, viewport − altura do painel)): painéis mais altos que a tela são
 * lidos por inteiro antes de travar — a base alinha com o fundo da viewport
 * e a página seguinte cobre por cima. `top: 0` fixo cortaria o rodapé de
 * painéis altos; `bottom: 0` anteciparia o painel antes da posição natural.
 * Antes da medição (SSR/primeiro paint) fica em fluxo normal, sem travar.
 */
export default function StackPanel({
  id,
  pinned = false,
  className = "",
  style,
  children,
}: StackPanelProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [stickyTop, setStickyTop] = useState<number | null>(null);

  useEffect(() => {
    if (!pinned) return;
    const el = ref.current;
    if (!el) return;

    const update = () =>
      setStickyTop(Math.min(0, window.innerHeight - el.offsetHeight));

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [pinned]);

  const positioning: React.CSSProperties | undefined =
    pinned && stickyTop !== null
      ? { position: "sticky", top: stickyTop }
      : undefined;

  return (
    <section
      ref={ref}
      id={id}
      style={{ ...style, ...positioning }}
      className={`relative ${className}`}
    >
      {children}
    </section>
  );
}
