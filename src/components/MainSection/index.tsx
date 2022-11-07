import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import Header from "../Header";

const MainSection = () => {
  return (
    <S.MainSection>
      {/* <S.LeftSide>
        <C.Logo className="logo" primary={0}>
          {config.companyName}
        </C.Logo>
      </S.LeftSide> */}
      <S.BackgroundImage/>
      <Header primary={0}/>
      <S.InfoContainer>
        <h1>{config.companyName}</h1>
        <p>{config.mainSection.description}</p>
        <C.Button to="/services" primary={0}>
          {config.mainSection.btnText}
        </C.Button>
      </S.InfoContainer>
    </S.MainSection>
  );
};

export default MainSection;
