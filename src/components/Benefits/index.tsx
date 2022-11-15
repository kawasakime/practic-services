import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";

interface IBenefitsProps {}

const Benefits: React.FunctionComponent<IBenefitsProps> = (props) => {
  const { benefits } = config;

  return (
    <S.Benefits>
      <C.Wrapper>
        <C.HomepageSectionTitle>{benefits.title}</C.HomepageSectionTitle>
        <S.BenefitsContainer>
          {benefits.items.map((item, i) => (
            <S.BenefitItem key={i}>
              <S.BenefitItemIcon>
                <img src={`${config.url}/assets/img/benefits/${item.icon}`} alt="" />
              </S.BenefitItemIcon>
              <p>{item.descr}</p>
            </S.BenefitItem>
          ))}
          <S.BenefitImage src="./assets/img/benefits.png" />
        </S.BenefitsContainer>
      </C.Wrapper>
    </S.Benefits>
  );
};

export default Benefits;
