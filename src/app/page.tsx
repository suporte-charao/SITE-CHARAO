import HeroSection from "@/components/sections/HeroSection";
import ManifestoFaixaSection from "@/components/sections/ManifestoFaixaSection";
import Manifesto19Section from "@/components/sections/Manifesto19Section";
import SobreSection from "@/components/sections/SobreSection";
import VideoSection from "@/components/sections/VideoSection";
import EmpresasImersivasSection from "@/components/sections/EmpresasImersivasSection";
import CtaContatoSection from "@/components/sections/CtaContatoSection";
import LucroRealSection from "@/components/sections/LucroRealSection";
import MapaAtuacaoSection from "@/components/sections/MapaAtuacaoSection";
import ClientesSection from "@/components/sections/ClientesSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import MetodologiaSection from "@/components/sections/MetodologiaSection";
import PremiosSection from "@/components/sections/PremiosSection";
import FaqSection from "@/components/sections/FaqSection";
import TrabalheConoscoSection from "@/components/sections/TrabalheConoscoSection";

export default function Home() {
  return (
    <main>
      {/* Sessão 1 — Hero */}
      <HeroSection />
      {/* Sessão 2 — manifesto + vídeo */}
      <ManifestoFaixaSection />
      {/* Sessão 3 — CONHEÇA O GRUPO CHARÃO (título + as 3 empresas).
          Subiu para cá conforme o brief; História/Sobre desceram. */}
      <VideoSection />
      <EmpresasImersivasSection />
      {/* Sessão 4 — cases: logos dos clientes + depoimentos, em sequência */}
      <ClientesSection />
      <DepoimentosSection />
      {/* Sessão 5 — Metodologia Charão */}
      <MetodologiaSection />
      {/* Sessão 6 — "Uma trajetória marcada por profundidade técnica
          e visão estratégica" */}
      <SobreSection />
      {/* Sessão 7 — card 19 anos (emenda de topo reta, sem a onda) */}
      <Manifesto19Section />
      {/* Sessão 8 — ZFM/ALC + "Nossa atuação abrange os setores" */}
      <MapaAtuacaoSection />
      {/* Sessão 9 — Especialização em Lucro Real */}
      <LucroRealSection />
      {/* Sessão 10 — Prêmios */}
      <PremiosSection />
      {/* Sessão 11 — Faça parte do time Charão */}
      <TrabalheConoscoSection />
      {/* Sessão 12 — Perguntas frequentes */}
      <FaqSection />
      {/* Fecho: CTA de contato. Não consta na lista de sessões do cliente,
          mas é o alvo da âncora #contato do menu — mantido aqui, encostado
          no rodapé, até haver definição em contrário. */}
      <CtaContatoSection />
    </main>
  );
}
