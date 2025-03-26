import React from 'react';
import ServiceCard from './services-card';

// SVG Icons (you'll want to replace these with actual imported SVG components)
const DigitalMarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
  </svg>
);

const SEOIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const SocialMediaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
  </svg>
);

const ContentCreationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
  </svg>
);

// Services data
const servicesData = [
  {
    icon: <DigitalMarketingIcon />,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that connect with your target audience and drive measurable results.',
    services: ['PPC Advertising', 'Email Campaigns', 'Conversion Optimization'],
    accentColor: 'blue'
  },
  {
    icon: <SEOIcon />,
    title: 'SEO',
    description: 'Boost your search rankings and drive organic traffic with data-driven SEO strategies.',
    services: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audits'],
    accentColor: 'orange'
  },
  {
    icon: <SocialMediaIcon />,
    title: 'Social Media Management',
    description: 'Engage your audience across platforms with compelling content and strategic campaigns.',
    services: ['Content Creation', 'Community Management', 'Paid Social Campaigns'],
    accentColor: 'purple'
  },
  {
    icon: <ContentCreationIcon />,
    title: 'Content Creation',
    description: 'Compelling content that tells your brand story and drives audience engagement.',
    services: ['Blog Writing', 'Video Production', 'Graphic Design'],
    accentColor: 'green'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to boost your brand's visibility and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              services={service.services}
              accentColor={service.accentColor}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to grow your business?
              </h3>
              <p className="text-blue-100">
                Get a customized strategy tailored to your specific goals.
              </p>
            </div>
            <a 
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 text-center whitespace-nowrap"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;