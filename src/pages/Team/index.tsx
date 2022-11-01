import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { ITeamPerson } from "../../interfaces/components";
import PrevSlide from "../../components/UI/PrevSlide";
import NextSlide from "../../components/UI/NextSlide";

const Team: React.FC = () => {
  const { team } = config;

  const slideRef = React.useRef<HTMLDivElement>(null);

  const [activePerson, setActivePerson] = React.useState<ITeamPerson>(
    team.list[0]
  );

  function getWidth() {
    return 30 + (slideRef.current !== null ? slideRef.current?.clientWidth : 1);
  }

  function handlePrevClick() {
    setLeftPositon(leftPosition + getWidth());
  }

  function handleNextClick() {
    setLeftPositon(leftPosition - getWidth());
  }

  const [leftPosition, setLeftPositon] = React.useState<number>(0);
  return (
    <C.Wrapper>
      <S.Team>
        <C.Title>{team.title}</C.Title>
        <S.TeamContainer>
          <S.Slider>
            <S.SliderContainer left={leftPosition}>
              {team.list.map((item, i) => (
                <S.SliderItem
                  className={
                    activePerson.img === item.img ? "active" : undefined
                  }
                  onClick={() => setActivePerson(item)}
                  ref={slideRef}
                  key={i}
                  bg={`${window.location.origin}/assets/img/team/${item.img}`}
                >
                  <p>{item.name}</p>
                </S.SliderItem>
              ))}
            </S.SliderContainer>
            <div className="slidesBtns">
              <PrevSlide
                className={leftPosition === 0 ? "disable" : undefined}
                onClick={handlePrevClick}
              />
              <NextSlide
                onClick={handleNextClick}
                className={
                  leftPosition === (team.list.length - 3) * -getWidth()
                    ? "disable"
                    : undefined
                }
              />
            </div>
          </S.Slider>
          <S.ActiveSlidePerson>
            <S.BigImage
              bg={`${window.location.origin}/assets/img/team/${activePerson.img}`}
            />
            <h2>{activePerson.name}</h2>
            <p>{activePerson.description}</p>
          </S.ActiveSlidePerson>
        </S.TeamContainer>
      </S.Team>
    </C.Wrapper>
  );
};

export default Team;
