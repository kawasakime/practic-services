import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { ITeamPerson } from "../../interfaces/components";
import Slider from "../../components/Slider";

const Team: React.FC = () => {
  const { team } = config;

  const slideRef = React.useRef<HTMLDivElement>(null);

  const [activePerson, setActivePerson] = React.useState<ITeamPerson>(team.list[0]);

  return (
    <C.Wrapper>
      <S.Team>
        <C.Title>{team.title}</C.Title>

        <Slider
          items={team.list}
          renderSliderItem={(item, i) => (
            <C.SliderItem
              className={activePerson.img === item.img ? "active" : undefined}
              onClick={() => setActivePerson(item)}
              ref={slideRef}
              key={i}
              bg={`${config.url}/assets/img/team/${item.img}`}>
              <div className="bg-img"></div>
              <p>{item.name}</p>
            </C.SliderItem>
          )}
          renderActiveItem={
            <S.ActiveSlidePerson>
              <S.BigImage bg={`${config.url}/assets/img/team/${activePerson.img}`} />
              <h2>{activePerson.name}</h2>
              <p>{activePerson.description}</p>
            </S.ActiveSlidePerson>
          }
        />
        {/* <S.TeamContainer>
          <C.Slider>
            <C.SliderContainer left={leftPosition}>
              {team.list.map((item, i) => (
                <C.SliderItem
                  className={activePerson.img === item.img ? "active" : undefined}
                  onClick={() => setActivePerson(item)}
                  ref={slideRef}
                  key={i}
                  bg={`${window.location.origin}/assets/img/team/${item.img}`}>
                  <p>{item.name}</p>
                </C.SliderItem>
              ))}
            </C.SliderContainer>
            <C.SliderBtns>
              <PrevSlide
                className={leftPosition === 0 ? "disable" : undefined}
                onClick={handlePrevClick}
              />
              <NextSlide
                onClick={handleNextClick}
                className={
                  leftPosition === (team.list.length - 3) * -getWidth() ? "disable" : undefined
                }
              />
            </C.SliderBtns>
          </C.Slider>
          <S.ActiveSlidePerson>
            <S.BigImage bg={`${window.location.origin}/assets/img/team/${activePerson.img}`} />
            <h2>{activePerson.name}</h2>
            <p>{activePerson.description}</p>
          </S.ActiveSlidePerson>
        </S.TeamContainer> */}
      </S.Team>
    </C.Wrapper>
  );
};

export default Team;
