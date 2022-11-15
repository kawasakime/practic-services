import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { config } from "../../configs/config";

export interface IFormData {
  name: string;
  phone: string;
  email: string;
}

const Registration: React.FC = () => {
  const { registration } = config;

  const [formData, setFormData] = React.useState<IFormData>({
    name: "",
    phone: "",
    email: "",
  });

  function handleClickBtn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <C.Wrapper>
      <S.Registration>
        <aside>
          <C.Title>{registration.title}</C.Title>
          <main>
            <S.SmallImageContainer>
              <img src={`${config.url}/assets/img/registration/1.jpg`} alt="" />
            </S.SmallImageContainer>
            <S.FormContainer>
              <p>{registration.description}</p>
              <form action="">
                <C.Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="ФИО"
                  required
                />
                <C.Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Номер телефона"
                  required
                />
                <C.Input
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  required
                />
                <C.Button primary={0} className="btn" as="button" onClick={handleClickBtn}>
                  Отправить
                </C.Button>
              </form>
            </S.FormContainer>
          </main>
        </aside>
        <img src={`${config.url}/assets/img/registration/2.jpg`} alt="" />
      </S.Registration>
    </C.Wrapper>
  );
};

export default Registration;
