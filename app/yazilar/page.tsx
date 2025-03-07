import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Kaygı ile Başa Çıkma Yöntemleri",
    excerpt:
      "Günlük hayatta karşılaştığımız kaygı durumlarıyla başa çıkmanın etkili yollarını öğrenin. Uzmanlarımızın önerileriyle kaygıyı yönetmek artık daha kolay.",
    image: "/blog/anxiety.jpg",
    category: "Kişisel Gelişim",
    date: "15 Mart 2024",
    readTime: "5 dk",
    author: {
      name: "Dr. Ayşe Yılmaz",
      image: "/team/member-1.jpg",
    },
  },
  {
    id: 2,
    title: "İlişkilerde Sağlıklı İletişimin Önemi",
    excerpt:
      "İlişkilerinizde yaşadığınız iletişim sorunlarını çözmek ve daha sağlıklı bir iletişim kurmak için pratik öneriler ve profesyonel tavsiyeler.",
    image: "/blog/communication.jpg",
    category: "İlişkiler",
    date: "10 Mart 2024",
    readTime: "7 dk",
    author: {
      name: "Uzm. Psk. Mehmet Kaya",
      image: "/team/member-2.jpg",
    },
  },
  {
    id: 3,
    title: "Ergenlik Döneminde Ebeveyn Olmak",
    excerpt:
      "Ergenlik dönemindeki çocuğunuzla iletişim kurmanın yolları, yaşanabilecek zorluklar ve çözüm önerileri hakkında kapsamlı bir rehber.",
    image: "/blog/parenting.jpg",
    category: "Ebeveynlik",
    date: "5 Mart 2024",
    readTime: "6 dk",
    author: {
      name: "Uzm. Psk. Zeynep Demir",
      image: "/team/member-3.jpg",
    },
  },
  {
    id: 4,
    title: "Depresyonla Mücadelede Önemli Adımlar",
    excerpt:
      "Depresyonun belirtileri, tedavi yöntemleri ve günlük hayatta uygulayabileceğiniz başa çıkma stratejileri hakkında detaylı bilgiler.",
    image: "/blog/depression.jpg",
    category: "Ruh Sağlığı",
    date: "1 Mart 2024",
    readTime: "8 dk",
    author: {
      name: "Dr. Ayşe Yılmaz",
      image: "/team/member-1.jpg",
    },
  },
];

export default function YazilarPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-emerald-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Uzman Yazıları
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Ruh sağlığı, kişisel gelişim ve psikoloji alanlarında uzmanlarımızın
            kaleme aldığı yazılar.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <Link href={`/yazilar/${article.id}`}>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {article.date}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {article.readTime} okuma
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-emerald-900 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={article.author.image}
                          alt={article.author.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-emerald-900">
                        {article.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-gray-600 mb-8">
              E-bültenimize kayıt olarak yeni yazılarımızdan ve
              etkinliklerimizden ilk siz haberdar olun.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-emerald-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors duration-200"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
