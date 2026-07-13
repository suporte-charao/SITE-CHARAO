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
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre-nos" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
  { label: "Trabalhe conosco", href: "#trabalhe-conosco" },
];

/** IDs das seções, derivados dos links — usados pelo scroll-spy. */
export const sectionIds = navLinks.map((l) => l.href.slice(1));
