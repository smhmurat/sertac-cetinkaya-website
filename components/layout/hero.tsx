import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-new.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Karartma katmanı */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero içeriği */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          <p className="text-white/90 text-lg mb-4">
            Psikoterapi, bu içsel hazineyi keşfetme sanatıdır.
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Karanlıkta parlayan yıldızlar gibi, ruhun derinliklerinde gizli
            güçler bekler.
          </h1>

          <p className="text-white/90 text-xl mb-8">
            Küçük bir adımla başlayan bu yolculuk, yaşamınızda gerçek
            potansiyelinizi açığa çıkarır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium inline-flex justify-center transition-colors duration-200"
            >
              Bizimle İletişime Geçin
            </Link>
            <Link
              href="/hakkimizda"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-medium inline-flex justify-center transition-colors duration-200"
            >
              Hikayemiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
