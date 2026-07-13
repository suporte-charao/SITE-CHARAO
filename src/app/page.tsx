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
import FaqSection from "@/components/sections/FaqSection";
import TrabalheConoscoSection from "@/components/sections/TrabalheConoscoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ManifestoFaixaSection />
      <Manifesto19Section />
      <SobreSection />
      <VideoSection />
      <EmpresasImersivasSection />
      <CtaContatoSection />
      <LucroRealSection />
      <MapaAtuacaoSection />
      <ClientesSection />
      <DepoimentosSection />
      <FaqSection />
      <TrabalheConoscoSection />
    </main>
  );
}
