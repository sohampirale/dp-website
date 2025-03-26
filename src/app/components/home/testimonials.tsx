"use client"
import React, { useState } from 'react';
import TestimonialCard from './testimonial-card';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova",
      quote: "Our organic traffic increased by 156% in just three months after implementing their SEO strategy. The team's expertise is unmatched. They are responsive and truly invested in our success.",
      result: "156% increase in organic traffic"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "Bright Solutions",
      quote: "Their content creation team revitalized our brand image completely. We've seen a 78% engagement increase on social media and higher conversion rates across all channels.",
      result: "78% increase in social engagement"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Manager",
      company: "GreenLife",
      quote: "The PPC campaign management has been outstanding. We've reduced our cost per acquisition by 42% while increasing conversions. Their data-driven approach makes all the difference.",
      result: "42% reduction in acquisition costs"
    },
    {
      name: "David Williams",
      position: "Founder",
      company: "InnovateTech",
      quote: "As a startup, their comprehensive digital marketing approach gave us the visibility we needed. Our lead generation increased by 230% in the first six months of working together.",
      result: "230% increase in lead generation"
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have transformed their digital presence with our solutions.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative testimonial-carousel">
          <div className="overflow-hidden">
            <div 
              className="testimonial-slider flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  result={testimonial.result}
                  imageText={testimonial.name.charAt(0)}
                />
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg -ml-4 z-10 carousel-prev focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg -mr-4 z-10 carousel-next focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 carousel-indicators">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`h-3 w-12 mx-1 rounded-full ${
                  index === activeSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Become Our Next Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;