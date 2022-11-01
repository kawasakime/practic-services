import React from "react";
import { IArrowSlide } from "../../interfaces/components";

const PrevSlide: React.FC<IArrowSlide> = ({ className, onClick }) => {
  return (
    <svg
    onClick={() => onClick()}
      className={className}
      width="120"
      height="18"
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 9L15 17.6603V0.339746L0 9ZM13.5 10.5H120V7.5H13.5V10.5Z" />
    </svg>
  );
};

export default PrevSlide;
