import styled, { css } from "styled-components";

const burgerLine = css`
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  transition: ${({ theme }) => theme.duration};
  left: 0;
`;

const afterBefore = css`
  content: "";
  position: absolute;
  ${burgerLine}
`;

export const BurgerBtn = styled.div<{ isActive: boolean }>`
  position: relative;
  display: none;
  height: 25px;
  width: 35px;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};
  z-index: 102;
  &:hover {
    opacity: 0.8;
  }
  @media ${({ theme }) => theme.media.large} {
    display: grid;
    place-items: center;
  }
  span {
    ${burgerLine}
    width: ${(props) => (props.isActive ? "0px" : "100%")};
    &::after {
      ${afterBefore}
      top: ${({ isActive }) => (isActive ? "auto" : "0")};
      transform: rotate(${({ isActive }) => (isActive ? "45deg" : "0deg")});
    }
    &::before {
      ${afterBefore}
      bottom: ${({ isActive }) => (isActive ? "auto" : "0")};
      transform: rotate(${({ isActive }) => (isActive ? "-45deg" : "0deg")});
    }
  }
`;

export const BurgerPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary}90;
  z-index: 101;
  font-size: 20px;
`;

export const BurgerPanelContainer = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  transition: .5s;
  padding: 130px 35px;

  @media ${({theme}) => theme.media.medium} {
    width: 90%;
  }

  .info {
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    opacity: .5;
  }
`;
