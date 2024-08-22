import React from 'react';

type RetentionRateCardProps = {
    title: string;
    points: string[];
    backgroundColor: string;
};

const RetentionRateCard = ({ title, points, backgroundColor }: RetentionRateCardProps) => {
  return (
    <div
      className={`w-56 h-56 rounded-full shadow-lg flex flex-col justify-center items-center text-center p-5 text-white rotate-z cursor-pointer`}
      style={{ backgroundColor }}
    >
      <h3 className="text-sm font-bold font-inter text-white">{title}</h3>
      <ul className="list-none p-0 mt-2 space-y-1">
        {points.map((point, index) => (
          <li key={index} className="text-xs font-inter">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetentionRateCard;
