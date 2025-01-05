import { FC } from "react";

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
  }
  
  const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="border rounded-lg shadow-md p-4 bg-white">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        )}
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default Card;
  