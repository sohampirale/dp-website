import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  accentColor: string;
  ctaLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  services,
  accentColor,
  ctaLink = '#contact'
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
      <div className="p-6">
        <div className={`bg-${accentColor}-100 p-3 inline-block rounded-full mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="mb-6 text-gray-600">
          {services.map((service, index) => (
            <li 
              key={index} 
              className={`flex items-center ${index < services.length - 1 ? 'mb-2' : ''}`}
            >
              <svg 
                className="h-5 w-5 mr-2 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {service}
            </li>
          ))}
        </ul>
        <a 
          href={ctaLink}
          className={`block w-full bg-${accentColor}-600  hover:bg-${accentColor}-700 text-white text-center py-3 px-4 rounded-lg transition duration-300`}
        >
          Request Quote
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;