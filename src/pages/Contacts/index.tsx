import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { config } from "../../configs/config";

const Contacts: React.FC = () => {
  const { information } = config;

  return (
    <C.Wrapper>
      <S.Contacts>
        <div className="info">
          <h3>Адрес</h3>
          <p>{information.address}</p>
          <h3>График работы</h3>
          <p>{information.timeWork}</p>
          <h3>Телефон</h3>
          <p>{information.phone}</p>
          <h3>Наши социальные сети</h3>
          <p>
            {information.socials.map((item, i) => (
              <a href={item.link}>{item.title}</a>
            ))}
          </p>
        </div>
        <YMaps>
          <Map
            className="map"
            defaultState={{ center: information.coord, zoom: 16 }}
          >
            <Placemark
              key={""}
              geometry={information.coord}
              options={{
                iconLayout: "default#image",
                iconImageSize: [44, 50],
              }}
            />
          </Map>
        </YMaps>
      </S.Contacts>
    </C.Wrapper>
  );
};

export default Contacts;
