import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <S.MainSection>
      <S.LeftSide>
        <C.Logo className="logo" primary={0}>
          {config.companyName}
        </C.Logo>
        <S.Navigation>
          <ul>
            {config.navigation.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </S.Navigation>
      </S.LeftSide>
      <S.InfoContainer>
        <h1>{config.companyName}</h1>
        <p>{config.mainSection.description}</p>
        <C.Button to="/services" primary={0}>
          {config.mainSection.btnText}
        </C.Button>
      </S.InfoContainer>
      <img src="./assets/img/main.jpg" alt="" />
    </S.MainSection>
  );
};

export default MainSection;
