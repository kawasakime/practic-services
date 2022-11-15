import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
    padding: 0 20px;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.whiteText}90;
  margin: 0 15px;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  height: fit-content;
  width: fit-content;

  img {
    position: relative !important;
    max-height: 25px;
  }
`;

export const Button = styled(Link)<{ primary?: 1 | 0 }>`
  display: grid;
  place-items: center;
  height: 45px;
  width: 215px;
  transition: ${({ theme }) => theme.duration};
  background: none;
  cursor: pointer;

  border: 1px solid
    ${({ theme, primary = 1 }) => (primary ? theme.colors.primary : theme.colors.secondary)};
  color: ${({ theme, primary = 1 }) => (primary ? theme.colors.blackText : theme.colors.whiteText)};

  &:hover {
    background: ${({ theme, primary = 1 }) =>
      primary ? theme.colors.primary : theme.colors.secondary};
    color: ${({ theme, primary = 1 }) =>
      primary ? theme.colors.whiteText : theme.colors.blackText};
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteText};
  }

  @media ${({ theme }) => theme.media.small} {
    width: 100%;
  }
`;

export const Title = styled.h1<{ primary?: 0 | 1 }>`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ primary = 0, theme }) => (primary ? theme.colors.blackText : theme.colors.whiteText)};

  @media ${({ theme }) => theme.media.medium} {
    font-size: 30px;
  }
`;

export const HomepageSectionTitle = styled.h1<{ primary?: number }>`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ primary = 1, theme }) => (primary ? theme.colors.primary : theme.colors.secondary)};
  text-align: center;
  margin-bottom: 70px;
  font-size: 30px;

  @media ${({ theme }) => theme.media.small} {
    font-size: 26px;
  }
`;

export const Navigation = styled.ul<{
  primary: 0 | 1;
  direction?: string;
  mLeft?: string;
  mBottom?: string;
  liMargin?: string;
}>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: center;
  margin-left: ${({ mLeft = "60px" }) => mLeft};

  @media ${({ theme }) => theme.media.large} {
    margin-left: ${({ mLeft = "0px" }) => mLeft};
  }

  li {
    margin: ${({ liMargin = "0 20px" }) => liMargin};

    &:first-child {
      margin-top: 0;
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }

    a {
      color: ${({ theme, primary }) => (primary ? theme.colors.blackText : theme.colors.whiteText)};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Slider = styled.div`
  position: relative;
  width: calc((200px + 20px) * 3);
  overflow: hidden;

  @media ${({ theme }) => theme.media.large} {
    height: 300px;
  }
`;

export const SliderContainer = styled.div<{ left: number }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 30px;

  @media ${({ theme }) => theme.media.large} {
    position: absolute;
    display: flex;
    left: ${({ left }) => left}px;
    transition: left ${({ theme }) => theme.duration};
  }
`;

export const SliderBtns = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${({ theme }) => theme.media.large} {
    display: block;
  }

  svg {
    box-sizing: content-box;
    padding: 10px;
    height: 10px;
    width: auto;
    fill: ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme }) => theme.duration};
    margin-left: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &.disable {
      pointer-events: none;
      fill: ${({ theme }) => theme.colors.secondary}70;
    }
  }
`;

export const SliderItem = styled.div<{ bg: string }>`
  position: relative;
  width: 200px;
  height: 250px;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.whiteText} !important;

  &.active {
    pointer-events: none;
    border: 4px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    border-bottom: none;
    opacity: 0.7;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.blackText};
    bottom: 0;
    padding: 7px 0;

    span {
      display: block;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 14px;
      color: ${({ theme }) => theme.colors.blackText};
    }
  }
`;

export const Error = styled.div`
  text-align: center;
  h2 {
    margin-top: -100px;
  }
`
