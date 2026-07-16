import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Formacoes } from '@/components/sections/Formacoes';
import { Depoimentos } from '@/components/sections/Depoimentos';
import { Stats } from '@/components/sections/Stats';
import { Time } from '@/components/sections/Time';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Formacoes />
      <Depoimentos />
      <Stats />
      <Time />
      <FinalCTA />
      <Footer />
    </main>
  );
}
