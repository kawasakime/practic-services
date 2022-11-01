import React from "react";
import { IArrowSlide } from "../../interfaces/components";

const NextSlide: React.FC<IArrowSlide> = ({ className, onClick }) => {
  return (
    <svg
      onClick={() => onClick()}
      className={className}
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 9L105 0.339746V17.6603L120 9ZM0 10.5H106.5V7.5H0V10.5Z" />
    </svg>
  );
};

export default NextSlide;
