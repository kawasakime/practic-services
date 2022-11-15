import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { Link } from "react-router-dom";

export interface BurgerPanelProps {
  handleClick: () => void;
}

const BurgerPanel: React.FunctionComponent<BurgerPanelProps> = ({ handleClick }) => {
  return (
    <S.BurgerPanel>
      <S.BurgerPanelContainer>
        <C.Navigation primary={0} direction="column" mLeft="0" liMargin="15px 0">
          {config.navigation.map((item, i) => (
            <li key={i} onClick={() => handleClick()}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
          <div className="info">
            {config.information.address}
            <br />
            {config.information.phone}
          </div>
        </C.Navigation>
      </S.BurgerPanelContainer>
    </S.BurgerPanel>
  );
};

export default BurgerPanel;
