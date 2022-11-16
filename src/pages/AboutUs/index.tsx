import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";

const AboutUs: React.FC = () => {
  const { aboutUs } = config;

  return (
    <C.Wrapper>
      <S.AboutUs>
        <S.Information>
          <h1>{aboutUs.title}</h1>
          <p>{aboutUs.description}</p>
          <C.Button primary={0} to="/services">
            {aboutUs.btnText}
          </C.Button>
        </S.Information>
        <img src={`${config.url}/assets/img/about-us.jpg`} alt="" />
      </S.AboutUs>
    </C.Wrapper>
  );
};

export default AboutUs;
