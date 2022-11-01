import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React from "react";
import { config } from "../../configs/config";

import * as S from "./styles";

const Footer: React.FC = () => {
  const { information } = config;

  return (
    <S.Footer>
      <div className="content">
        <h3>Адрес</h3>
        <p>{information.address}</p>
        <h3>Телефон</h3>
        <p>{information.phone}</p>
      </div>
      <YMaps>
        <Map className="map" defaultState={{ center: information.coord, zoom: 16 }}>
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
    </S.Footer>
  );
};

export default Footer;
