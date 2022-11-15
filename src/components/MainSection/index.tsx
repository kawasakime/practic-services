import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import Header from "../Header";

const MainSection = () => {
  return (
    <S.MainSection>
      <S.BackgroundImage bgUrl={`${config.url}/assets/img/main.jpg`}/>
      <Header primary={0} />
      <C.Wrapper>
        <S.InfoContainer>
          <h1>{config.companyName}</h1>
          <p>{config.mainSection.description}</p>
          <C.Button to="/services" primary={0}>
            {config.mainSection.btnText}
          </C.Button>
        </S.InfoContainer>
      </C.Wrapper>
    </S.MainSection>
  );
};

export default MainSection;
