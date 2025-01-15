import React from "react";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, description }) => (
  <div className="relative">
    <img src={image} alt={title} className="w-25 h-25 object-cover rounded-lg" />
    <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
      <img
        src="/images/rectangle.png"
        alt="Decoration"
        className="w-6 h-4 object-cover rounded-full mb-4"
      />
      <h3 className="text-[32px] font-inter font-bold text-white">{title}</h3>
      <p className="font-interRegular text-[16px] text-white mt-2">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  </div>
);

export default CaseStudyCard;
