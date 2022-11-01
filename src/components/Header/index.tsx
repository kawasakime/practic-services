import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../configs/config";
import { Logo } from "../../styles/components";

import * as S from "./styles";

export interface HeaderProps {
  primary?: 1 | 0;
}

const Header: React.FC<HeaderProps> = ({ primary = 1 }) => {
  return (
    <S.Header primary={primary}>
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
    </S.Header>
  );
};

export default Header;
