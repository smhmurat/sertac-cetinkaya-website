import { Hero } from "@/components/layout/hero";
import { Services } from "@/components/layout/services";
import { About } from "@/components/layout/about";
import { Testimonials } from "@/components/layout/testimonials";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
