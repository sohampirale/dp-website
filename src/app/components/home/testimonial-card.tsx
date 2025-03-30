import React from 'react';
import Image from "next/image";

const TestimonialCard = ({ name, position, company, quote, result }: {
  name: string;
  position: string;
  company: string;
  quote: string;
  result: string;
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div className="mr-4">
            <Image 
              src={`https://placehold.co/80x80?text=${encodeURIComponent(name)}`}
              alt={`${name} - ${position}`} 
              width={80} 
              height={80} 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">{name}</h4>
            <p className="text-gray-600">{position}, {company}</p>
          </div>
        </div>
        <div className="mb-6 flex-grow">
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <svg 
                key={index}
                className="w-5 h-5 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic">
             &quot;{quote}&quot;
          </p>
        </div>
        <p className="text-blue-600 font-medium">
          Result: <span className="text-gray-700">{result}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
