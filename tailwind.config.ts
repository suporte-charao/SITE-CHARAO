import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Tons de areia / bege — destaques, botões e palavras-chave do hero.
           Base (#C8A890) extraída diretamente dos pixels do protótipo. */
        areia: {
          50: "#F7F1EB",
          100: "#EFE3D8",
          200: "#E2CDBA",
          300: "#D5B79D",
          400: "#C8A890",
          500: "#B7937A",
          600: "#9E7C63",
          700: "#7E6249",
          DEFAULT: "#C8A890",
        },

        /* Fundos escuros principais (hero / seções escuras).
           Quase preto, levemente quente. */
        carvao: {
          950: "#0A0909",
          900: "#0D0C0C",
          800: "#161413",
          700: "#1F1C1A",
          600: "#2A2624",
          DEFAULT: "#0D0C0C",
        },

        /* Fundo do footer — azul-petróleo bem escuro. */
        petroleo: {
          950: "#090D12",
          900: "#0D1219",
          800: "#131A24",
          700: "#1B2430",
          DEFAULT: "#0D1219",
        },

        /* Verde dos destaques — gradiente teal profundo → menta. */
        verde: {
          deep: "#065F56",
          700: "#0B7A66",
          600: "#0F9E78",
          500: "#10B981",
          400: "#34D399",
          300: "#6EE7B7",
          mint: "#86FBAD",
          DEFAULT: "#10B981",
        },

        /* Cinzas de apoio para textos secundários sobre fundo escuro. */
        nevoa: {
          400: "#9AA1AC",
          300: "#B8BEC7",
          200: "#D5D9DF",
        },

        /* ==== PALETA OFICIAL DAS 3 MARCAS ====
           Valores amostrados pixel a pixel de "Paletas de cores.pdf" (pág. 3),
           o guia oficial da marca. Não são aproximações. */

        /* Charão CONSULTORIA — azul marinho (+ teal e tan de apoio) */
        marinho: {
          950: "#0E151D", // quase preto azulado
          900: "#152031", // AZUL MARINHO principal (fundo da marca)
          500: "#37495C", // slate de apoio
          teal: "#17B1AB", // acento turquesa
          tan: "#C7A78F", // acento bege
          DEFAULT: "#152031",
        },

        /* Charão TRIBUTÁRIO — verde */
        tributario: {
          900: "#0D3731", // verde escuro profundo
          500: "#49DE7B", // VERDE PRINCIPAL da marca
          300: "#AAF078", // VERDE CLARO (lima) — destaques sobre fundo escuro
          100: "#E8F5E1", // verde muito pálido
          DEFAULT: "#49DE7B",
        },

        /* Charão EDUCACIONAL — laranja (+ cinzas de apoio).
           O 700 (#B55300) é o tom de botão com texto branco (contraste ≥3:1);
           o 500 (#FF7800) é a cor principal da marca. */
        laranja: {
          900: "#241C14", // quase preto quente (fundo da marca)
          700: "#B55300", // laranja escuro
          500: "#FF7800", // LARANJA PRINCIPAL da marca
          300: "#FF9144", // laranja claro
          cinza: "#5C5C5C",
          cinzaMedio: "#C6BEBE",
          cinzaClaro: "#E3DDDD",
          DEFAULT: "#FF7800",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Glow dourado "respirando" atrás do CTA da Hero.
        glowPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.96)" },
          "50%": { opacity: "0.6", transform: "scale(1.04)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
