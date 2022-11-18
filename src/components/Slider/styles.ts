import styled from "styled-components";

export const SliderWrapper = styled.div<{ mTop: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ mTop }) => mTop};

  @media ${({ theme }) => theme.media.large} {
    flex-direction: column;
    align-items: center;
  }

  @media ${({ theme }) => theme.media.medium} {
    overflow: hidden;
    margin-top: 50px;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: calc((200px * 3) + 60px);
  overflow: hidden;

  @media ${({ theme }) => theme.media.large} {
    height: 400px;
  }

  @media ${({ theme }) => theme.media.medium} {
    overflow: visible;
    width: calc((200px * 2) + 30px);
  }

  @media ${({ theme }) => theme.media.small} {
    width: calc(200px);
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
  position: relative;

  @media ${({ theme }) => theme.media.large} {
    display: flex;
    align-items: center;

    svg {
      margin-left: 0 !important;
    }
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

export const CategoriesList = styled.ul`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.media.large} {
    position: relative;
    top: 0px;
  }

  @media ${({ theme }) => theme.media.medium} {
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
    li {
      padding: 10px 15px;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 5px;

      &.active {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.blackText} !important;
        text-decoration: none !important;
      }
    }
  }

  li {
    color: ${({ theme }) => theme.colors.whiteText}80;
    cursor: pointer;

    &:not(.active):hover {
      color: ${({ theme }) => theme.colors.whiteText}95;
    }

    &.active {
      color: ${({ theme }) => theme.colors.whiteText};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      text-decoration: underline;
    }
  }
`;

export const ActiveItem = styled.div`
  position: relative;
  width: 400px;

  @media ${({ theme }) => theme.media.large} {
    margin-top: 30px;
  }

  @media (max-width: 460px) {
    width: 100%;
  }
`;
