"use client";

import { useState } from "react";
import Image from "next/image";
import testimonialsData from "@/app/danisan-yorumlari/testimonials.json";

export function Testimonials() {
  const { testimonials } = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-16">
            Danışan Yorumları
          </h2>

          {/* Yorumlar Slider */}
          <div className="relative">
            {/* Sol Buton */}
            <button
              onClick={prevSlide}
              className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-emerald-800 rounded-full p-3 hover:bg-emerald-700 transition-colors duration-200"
              aria-label="Önceki"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Sağ Buton */}
            <button
              onClick={nextSlide}
              className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 bg-emerald-800 rounded-full p-3 hover:bg-emerald-700 transition-colors duration-200"
              aria-label="Sonraki"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* Yorum Kartı */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col items-center">
                <blockquote className="text-gray-600 text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-center">
                  <cite className="text-emerald-900 font-semibold text-lg not-italic">
                    {testimonials[currentIndex].name}
                  </cite>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>
            </div>

            {/* Nokta Navigasyon */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-emerald-900" : "bg-emerald-200"
                  }`}
                  aria-label={`Yorum ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
