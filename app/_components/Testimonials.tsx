"use client";
import React from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Capital Engineering Consultancy demonstrated outstanding professionalism, technical expertise, and commitment to quality during the execution of the GOP-TCF Project in partnership with ADNOC. Their timely execution, unwavering support, and adherence to high standards significantly contributed to the project's success.",
    attribution: "Hazem Eltawi, Director of Contracting & Maintenance, NIGM",
  },
  {
    id: 2,
    content:
      "Capital Engineering Consultancy demonstrated outstanding professionalism, technical expertise, and commitment to quality during the execution of the GOP-TCF Project in partnership with ADNOC. Their timely execution, unwavering support, and adherence to high standards significantly contributed to the project's success.",
    attribution: "Hazem Eltawi, Director of Contracting & Maintenance, NIGM",
  },
  {
    id: 3,
    content:
      "Capital Engineering Consultancy demonstrated outstanding professionalism, technical expertise, and commitment to quality during the execution of the GOP-TCF Project in partnership with ADNOC. Their timely execution, unwavering support, and adherence to high standards significantly contributed to the project's success.",
    attribution: "Hazem Eltawi, Director of Contracting & Maintenance, NIGM",
  },
];

export default function Testimonials3D() {
  return (
    <div className="relative py-32 overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100/20 to-transparent pointer-events-none"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 800 }}
          >
            Client Testimonials
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Trusted by leading organizations across the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Card background accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#211574] to-[#e9647c]" />

              {/* Quote icon */}
              <div className="mb-6 text-[#211574] opacity-30">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>

              {/* Attribution */}
              <div className="text-sm font-medium text-gray-900">
                — {testimonial.attribution}
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 opacity-5">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M0 100 L100 0"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
