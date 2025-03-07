"use client";

import Image from "next/image";
import testimonialsData from "./testimonials.json";
import Modal from "@/components/ui/modal";
import { useState } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          className="w-5 h-5 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function DanisanYorumlariPage() {
  const { testimonials } = testimonialsData;
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-emerald-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Danışan Yorumları
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Danışanlarımızın deneyimleri ve başarı hikayeleri.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-emerald-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-gray-600 leading-relaxed">
                  "{truncateText(testimonial.quote, 200)}"
                  {testimonial.quote.length > 200 && (
                    <button
                      onClick={() => setSelectedTestimonial(testimonial)}
                      className="ml-2 text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Devamı
                    </button>
                  )}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      >
        {selectedTestimonial && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-emerald-900 text-xl">
                {selectedTestimonial.name}
              </h3>
              <p className="text-gray-500">{selectedTestimonial.service}</p>
            </div>
            <StarRating rating={selectedTestimonial.rating} />
            <blockquote className="text-gray-600 leading-relaxed">
              "{selectedTestimonial.quote}"
            </blockquote>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
              Siz de Başarı Hikayenizi Yazın
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Profesyonel destek almak için hemen randevu alın, uzman
              psikologlarımız size yardımcı olmak için hazır.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-emerald-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors duration-200"
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
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
