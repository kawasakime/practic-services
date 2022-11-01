import styled from "styled-components";

export const MainSection = styled.section`
position: relative;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;

  img {
    height: 100%;
    position: absolute;
    right: 0;
    box-shadow: 0px 0px 30px 0px ${({theme}) => theme.colors.secondary}10;
  }
`;

export const LeftSide = styled.aside`
  position: relative;
  width: 200px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary}50;
  padding: 45px;
  display: flex;
  align-items: center;

  .logo {
    position: absolute;
    top: 45px;
    left: 45px;
  }
`;

export const Navigation = styled.ul`
  li {
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }
    a {
      color: ${({ theme }) => theme.colors.secondary};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  margin-left: 60px;
  max-width: 360px;

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
  }
`;
