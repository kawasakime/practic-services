import * as React from "react";

import * as S from "./styles";

interface IBurgerBtnProps {
  isActive: boolean;
  handleClick: () => void;
}

const BurgerBtn: React.FunctionComponent<IBurgerBtnProps> = ({ isActive, handleClick }) => {
  return (
    <S.BurgerBtn onClick={() => handleClick()} isActive={isActive}>
      <span></span>
    </S.BurgerBtn>
  );
};

export default BurgerBtn;
