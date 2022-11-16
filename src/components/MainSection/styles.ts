import styled from "styled-components";

export const MainSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;

  & > * {
    z-index: 2;
  }
`;

export const BackgroundImage = styled.div<{ bgUrl: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  background-position: center center;
  z-index: 1;
  opacity: 0.1;
`;

export const InfoContainer = styled.div`
  position: relative !important;
  margin-left: 60px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 20vh;
  text-align: center;
  z-index: 20;

  @media ${({ theme }) => theme.media.medium} {
    margin-top: 10vh;
  }

  @media ${({ theme }) => theme.media.medium} {
    margin-top: 4vh;
  }

  h1 {
    font-size: 80px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    text-transform: uppercase;

    @media ${({ theme }) => theme.media.medium} {
      font-size: 70px;
    }
  }

  p {
    margin: 15px 0 90px 0;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: 1.4em;
  }
`;
