# PRODUCT.md — Site institucional Grupo Charão

## Register

Brand / marketing site (one-page institucional). O design É o produto: a página
vende autoridade técnica e sofisticação antes de qualquer clique.

## Quem usa / para quê

- **Público**: donos e gestores de empresas de médio e grande porte (indústria,
  distribuição, varejo, serviços) na Zona Franca de Manaus e na Área de Livre
  Comércio de Boa Vista; secundariamente contadores e profissionais em busca de
  mentorias/cursos (Educacional) e candidatos (Carreira).
- **Objetivo de negócio**: gerar conversas comerciais (WhatsApp do comercial,
  formulário de recrutamento, landings das empresas do grupo) e sustentar a
  percepção premium do grupo (19 anos, GPTW, Leaders League).
- **Idioma**: 100% português brasileiro.

## Estrutura (13 sessões, ordem aprovada pelo cliente)

Hero → Manifesto+vídeo → Conheça o Grupo (3 empresas em painéis empilhados) →
Cases (logos + depoimentos) → Metodologia (pirâmide animada) → Nossa história →
ZFM/ALC + setores → Lucro Real → Prêmios → Carreira → FAQ → CTA contato → Rodapé.

## Personalidade de marca

Premium, técnica, próxima. "Dark premium" com ouro (#C5A059) como fio condutor
dos ornamentos; cada empresa do grupo tem cor própria vinda da paleta oficial
(`Paletas de cores.pdf`, pág. 3):

- **Consultoria**: marinho `#152031` (+ teal `#17B1AB`, tan `#C7A78F`)
- **Tributário**: verde `#49DE7B` / escuro `#0D3731` / lima `#AAF078`
- **Educacional**: laranja `#FF7800` / claro `#FF9144`

Tokens Tailwind: `marinho`, `tributario`, `laranja` (+ legados `areia`,
`carvao`, `petroleo`). Fontes: Outfit (sans) e Playfair (serif, pouco usada).

## Princípios de design acordados com o cliente

1. **Nenhuma foto cortada** — pessoas nunca podem ser decepadas por
   object-cover; cards seguem a proporção real do arquivo quando preciso.
2. Cores sempre da paleta oficial; desvios só com registro do porquê.
3. Contraste medido (WCAG) a cada mudança de cor — não estimado.
4. Transições entre sessões são parte do design (curvas, fios dourados,
   arestas); a StackPanel das 3 empresas é intocável sem pedido explícito.
5. Motion premium: entradas encenadas (mask-up/wipe/zoom/slide), montagem da
   pirâmide, 3D nos depoimentos — sempre com `prefers-reduced-motion` e sem
   custo de jank. Liso > exuberante.

## Anti-referências

- Template SaaS genérico (hero-metric, grids de cards idênticos, eyebrows
  uppercase em toda sessão).
- Qualquer estética "cream/bege AI-default" fora do off-white já aprovado
  (`#E7E1D4` na ZFM, `#FAF8F5` no manifesto).
- Stock photography — só fotos reais da equipe/estúdio do cliente.

## Estado

Site em produção ativa (GitHub `suporte-charao/SITE-CHARAO`, deploy Vercel).
Pendências conhecidas: URLs das páginas próprias de Consultoria/Educacional,
selo GPTW nacional, vídeo real no card do manifesto.
