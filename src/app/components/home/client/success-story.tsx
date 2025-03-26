import React from "react";
export interface Tag {
  label: string;
  color: string;
}

export interface SuccessStoryCardProps {
  logo?: string;
  companyName: string;
  testimonial: string;
  tags: Tag[];
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  logo,
  companyName,
  testimonial,
  tags,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={logo || `https://placehold.co/80x80?text=${companyName}`}
            alt={`${companyName} Company Logo`}
            className="w-12 h-12 rounded object-cover mr-4"
            width="80"
            height="80"
          />
          <h4 className="text-lg font-bold text-gray-900">{companyName}</h4>
        </div>
        <p className="text-gray-700 mb-4">"{testimonial}"</p>
        <div className="flex items-center">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`${
                tag.color
              } text-xs font-semibold px-2.5 py-0.5 rounded ${
                index > 0 ? "ml-2" : ""
              }`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
