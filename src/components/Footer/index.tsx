import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React from "react";
import { config } from "../../configs/config";

import * as S from "./styles";
import * as C from "../../styles/components";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { information, navigation } = config;

  return (
    <S.Footer>
      <C.Wrapper className="wrapper">
        <aside>
          <C.Logo to={"/"}>
            <img src={`${config.url}/assets/img/logo.png`} alt="" />
          </C.Logo>
          <C.Navigation primary={0} liMargin="10px 0" direction="column" mLeft="100px">
            {navigation.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </C.Navigation>
        </aside>
        <p>
          {information.address}
          <br />
          {information.timeWork}
          <br />
          {information.phone}
          <br />
          <br />
          {information.socials.map((item, i) => (
            <C.SocialLink key={i} href={item.link}>{item.title}</C.SocialLink>
          ))}
        </p>
      </C.Wrapper>
    </S.Footer>
  );
};

export default Footer;
