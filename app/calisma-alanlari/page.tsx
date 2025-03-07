import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Yetişkin Terapisi",
    description:
      "Yaşam örüntülerini anlamak, bunları değiştirmek, geçmişte yaşanan zor deneyimlerin açtığı yaraları sarmak hedeflenir. Depresyon, kaygı bozuklukları, ilişki sorunları, travma sonrası stres bozukluğu gibi birçok alanda destek sunulmaktadır.",
    image: "/services/individual-therapy.jpg",
    features: [
      "Bireysel psikoterapi",
      "Depresyon tedavisi",
      "Kaygı bozuklukları",
      "Travma terapisi",
      "Kişilik bozuklukları",
      "İlişki sorunları",
    ],
  },
  {
    id: 2,
    title: "Çift ve Aile Terapisi",
    description:
      "Çiftlerin birbirleriyle doğru iletişim sağlamaları ve ilişkilerini daha sağlıklı adımlarla ilerletmeleri yolunda eşlik etmek hedeflenmiştir. Aile içi iletişim sorunları, ebeveynlik becerileri, boşanma süreci gibi konularda destek verilmektedir.",
    image: "/services/couple-therapy.jpg",
    features: [
      "Çift terapisi",
      "Evlilik öncesi danışmanlık",
      "Boşanma süreci desteği",
      "Aile içi iletişim",
      "Ebeveynlik becerileri",
      "Aile danışmanlığı",
    ],
  },
  {
    id: 3,
    title: "Ergen Terapisi",
    description:
      "Çocukluk ve yetişkinlik arasındaki geçiş dönemi olarak tanımlansa da kritik gelişim görevlerini barındıran önemli bir dönemdir. Kimlik gelişimi, akran ilişkileri, akademik sorunlar, aile içi çatışmalar gibi konularda destek sağlanmaktadır.",
    image: "/services/teen-therapy.jpg",
    features: [
      "Ergen psikoterapisi",
      "Okul sorunları",
      "Akran ilişkileri",
      "Aile içi iletişim",
      "Kimlik gelişimi",
      "Davranış problemleri",
    ],
  },
];

export default function CalismaAlanlariPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-emerald-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Çalışma Alanlarımız
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Uzman kadromuzla birlikte farklı alanlarda terapi hizmeti sunuyoruz.
          </p>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center`}
              >
                {/* Görsel */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* İçerik */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-emerald-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-emerald-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 flex-shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Profesyonel Destek Almaya Hazır Mısınız?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Uzman psikologlarımızla tanışmak ve danışmanlık almak için hemen
              iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Randevu Alın
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
      </section>
    </main>
  );
}
