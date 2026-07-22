/**
 * Links de navegação do site (SPA por âncoras).
 * Os `href` apontam para os `id` das seções na página principal.
 * Compartilhado entre Header e Footer para manter consistência.
 */
export type NavLink = {
  label: string;
  href: `#${string}`;
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Empresas e Serviços", href: "#empresas-servicos" },
  { label: "Cases", href: "#clientes" },
  { label: "História", href: "#sobre-nos" },
  { label: "Prêmios", href: "#premios" },
  { label: "Carreira", href: "#trabalhe-conosco" },
  { label: "Contato", href: "#contato" },
];

/** IDs das seções, derivados dos links — usados pelo scroll-spy. */
export const sectionIds = navLinks.map((l) => l.href.slice(1));
