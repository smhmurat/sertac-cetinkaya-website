import { About } from "@/components/layout/about";
import { Hero } from "@/components/layout/hero";
import { Services } from "@/components/layout/services";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
