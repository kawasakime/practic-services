import * as React from "react";

import * as C from "../styles/components";

const Error: React.FunctionComponent = (props) => {
  return (
    <C.Wrapper>
      <C.Error>
        <h2>Произошла ошибка.</h2> Перезагрузите страницу или попробуйте позже.
      </C.Error>
    </C.Wrapper>
  );
};

export default Error;
