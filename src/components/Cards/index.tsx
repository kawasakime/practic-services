import * as React from "react";
import { config } from "../../configs/config";

import * as C from "../../styles/components";
import * as S from "./styles";

const Cards: React.FunctionComponent = () => {
  const { cards } = config;

  return (
    <S.Cards>
      <C.Wrapper>
        <C.HomepageSectionTitle>{cards.title}</C.HomepageSectionTitle>
        <S.CardsContainer>
          {cards.items.map((item, i) => (
            <S.CardItem key={i}>
              <img src={`${config.url}/assets/img/cards/${item.img}`} alt="" />
              <p>{item.title}</p>
              <span>{item.descr}</span>
            </S.CardItem>
          ))}
        </S.CardsContainer>
      </C.Wrapper>
    </S.Cards>
  );
};

export default Cards;
