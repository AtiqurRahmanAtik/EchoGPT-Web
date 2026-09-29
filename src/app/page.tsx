import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AIModels from "@/components/landing/AIModels";
import ProductPreview from "@/components/landing/ProductPreview";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
    <header>

      <Navbar />
    </header>

      <main>
        <Hero />
        <Features />
        <AIModels />
        <ProductPreview />
        <WhyChooseUs />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

<footer>

      <Footer />
</footer>
    </>
  );
}