import React from "react";
import { Link, useLocation } from "react-router-dom";
import { config } from "../../configs/config";

import * as S from "./styles";
import * as C from "../../styles/components";
import BurgerPanel from "../Burger/BurgerPanel";
import BurgerBtn from "../Burger/BurgerBtn";

export interface HeaderProps {
  primary?: 1 | 0;
}

const Header: React.FC<HeaderProps> = ({ primary = 1 }) => {
  const { information } = config;

  const [isActive, setIsActive] = React.useState<boolean>(false);

  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isActive]);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <C.Wrapper>
      {isActive && <BurgerPanel handleClick={handleClick} />}

      <S.Header primary={primary}>
        <aside>
          <BurgerBtn handleClick={handleClick} isActive={isActive} />
          <C.Logo to={"/"}>
            <img src={`${config.url}/assets/img/logo.png`} alt="" />
          </C.Logo>
          <C.Navigation primary={primary}>
            {location.pathname !== "/" && (
              <li>
                <Link to="/">Главная</Link>
              </li>
            )}

            {config.navigation.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </C.Navigation>
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
