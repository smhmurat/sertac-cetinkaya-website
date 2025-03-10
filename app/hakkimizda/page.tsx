export default function HakkimizdaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-emerald-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa
            perspiciatis quidem accusamus omnis sint! Harum expedita, officiis
            vero quis aperiam maxime mollitia aliquam voluptas ipsam id, natus
            numquam, provident laudantium ea atque fuga quo delectus maiores
            itaque. Facilis provident a tempore distinctio quo illo excepturi
            soluta dignissimos suscipit alias.
          </p>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                Misyonumuz
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Bireylerin ruhsal sağlığını korumak ve geliştirmek için bilimsel
                temelli, etik değerlere bağlı ve yenilikçi yaklaşımlarla
                kaliteli hizmet sunmak. Her danışanımızın benzersiz olduğu
                bilinciyle kişiye özel çözümler üretmek.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                Vizyonumuz
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ruh sağlığı alanında öncü, güvenilir ve tercih edilen bir merkez
                olmak. Sürekli gelişim ve yenilikçi yaklaşımlarla sektörde
                standartları belirleyen bir kurum haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekip */}
      {/* <section className="py-20 bg-[rgb(251,247,243)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-16">
            Uzman Kadromuz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`/team/member-${i}.jpg`}
                    alt={`Ekip Üyesi ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-1">
                    Dr. Ayşe Yılmaz
                  </h3>
                  <p className="text-gray-600 mb-4">Uzman Klinik Psikolog</p>
                  <p className="text-gray-600 text-sm">
                    15 yıllık deneyim • Bilişsel Davranışçı Terapi • EMDR
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Değerlerimiz */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-16">
            Değerlerimiz
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Profesyonellik",
                description:
                  "En yüksek etik standartlarda ve profesyonel yaklaşımla hizmet veriyoruz.",
              },
              {
                title: "Gizlilik",
                description:
                  "Danışanlarımızın mahremiyetini ve gizliliğini en üst düzeyde koruyoruz.",
              },
              {
                title: "Empati",
                description:
                  "Her danışanımızın hikayesini anlayarak ve empati kurarak yaklaşıyoruz.",
              },
              {
                title: "Sürekli Gelişim",
                description:
                  "Alanımızdaki güncel gelişmeleri takip ederek kendimizi sürekli geliştiriyoruz.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
