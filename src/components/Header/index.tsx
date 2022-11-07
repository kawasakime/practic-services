import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../configs/config";
import { Logo } from "../../styles/components";

import * as S from "./styles";
import * as C from "../../styles/components";

export interface HeaderProps {
  primary?: 1 | 0;
}

const Header: React.FC<HeaderProps> = ({ primary = 1 }) => {
  const { information } = config;

  return (
    <C.Wrapper>
      <S.Header primary={primary}>
        <aside>
          <Logo primary={primary}>{config.companyName}</Logo>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            {config.navigation.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <p className="info">
          {information.address}
          <br />
          {information.phone}
        </p>
      </S.Header>
    </C.Wrapper>
  );
};

export default Header;
