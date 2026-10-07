import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Lanes from "@/components/Lanes";
import BrokenIsBeautiful from "@/components/BrokenIsBeautiful";
import ProofStrip from "@/components/ProofStrip";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Lanes />
      <BrokenIsBeautiful />
      <ProofStrip />
      <Team compact />
      <CTA
        heading="Got a story? Let's talk."
        body="Whether you want to make it or make it better, tell us where you are."
      />
    </>
  );
}
