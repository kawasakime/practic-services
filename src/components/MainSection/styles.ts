import styled from "styled-components";

export const MainSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) =>
    `linear-gradient(270deg, ${theme.colors.primary} 54.51%, ${theme.colors.teriary} 100%)`};
  color: ${({ theme }) => theme.colors.secondary};

  & > * {
    z-index: 2;
  }

  img {
    height: 100%;
    position: absolute;
    right: 0;
    box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.colors.secondary}10;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("./assets/img/main.jpg");
  background-size: cover;
  background-position: center center;
  z-index: 1;
  opacity: 0.1;
`;

export const InfoContainer = styled.div`
  position: relative;
  margin-left: 60px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 20vh;
  text-align: center;

  h1 {
    font-size: 80px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
  }
  p {
    margin: 15px 0 90px 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: 1.4em;
  }
`;
