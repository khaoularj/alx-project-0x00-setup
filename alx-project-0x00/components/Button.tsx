import React from 'react';
import { ButtonProps } from "@/interfaces";



const Button: React.FC<ButtonProps> = ({ title, size, shape, onClick }) => {
    const baseClasses = "transition-all duration-200 ease-in-out text-white font-bold focus:outline-none";


  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };


  const shapeClasses = {
    'rounded-sm': "rounded-sm",
    'rounded-md': "rounded-md",
    'rounded-full': "rounded-full",
  };


  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 hover:bg-blue-600`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;