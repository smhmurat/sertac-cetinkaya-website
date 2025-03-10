import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="py-32 bg-[#fbf7f3]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Sol taraf - Görseller */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/about-1.jpg"
                alt="Terapi seansı"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/about-2.jpg"
                alt="Terapi odası"
                fill
                className="object-cover"
              />
            </div>
            {/* Yeşil dekoratif daire */}
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full bg-emerald-50"></div>
          </div>

          {/* Sağ taraf - İçerik */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8">
              Hikayemiz
            </h2>
            {/* <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Görülmek her bireyin temel duygusal ihtiyaçlarından biri. Kelime
              anlamı görülmek olan Dide'de danışanlarımızın problemlerine,
              ihtiyaçlarına, arzularına merakla ve şefkatle bakmayı
              amaçlamaktayız. Uzman psikologlardan oluşan kadromuzla çocuk,
              ergen, yetişkin, çiftlerle ve ailelerle farklı terapi yöntemleri
              ile terapi hizmeti vermekteyiz.
            </p> */}
            <Link
              href="/hikayemiz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors duration-200"
            >
              Daha Fazla
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
