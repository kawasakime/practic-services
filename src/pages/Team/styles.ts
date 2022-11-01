import styled from "styled-components";

export const Team = styled.section`
  padding: 50px 0 150px 0;
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Slider = styled.div`
  position: relative;
  width: calc((200px + 20px) * 3);
  height: 300px;
  overflow: hidden;

  .slidesBtns {
    position: absolute;
    bottom: 0;
    right: 0;

    svg {
      box-sizing: content-box;
      padding: 10px;
      height: 10px;
      width: auto;
      fill: ${({ theme }) => theme.colors.primary};
      transition: ${({ theme }) => theme.duration};
      margin-left: 20px;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }

      &.disable {
        pointer-events: none;
        fill: ${({ theme }) => theme.colors.primary}70;
      }
    }
  }
`;

export const SliderContainer = styled.div<{ left: number }>`
  position: absolute;
  display: flex;
  left: ${({ left }) => left}px;
  transition: left ${({ theme }) => theme.duration};
`;

export const SliderItem = styled.div<{ bg: string }>`
  position: relative;
  width: 200px;
  height: 250px;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center center;
  margin-right: 30px;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  &.active {
    pointer-events: none;
    border: 4px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.primary}50;
  }

  p {
    position: absolute;
    padding-left: 15px;
    height: 40px;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.primary}80;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.secondary};
    bottom: 0;
  }
`;

export const ActiveSlidePerson = styled.div`
  margin-left: 40px;
  max-width: 400px;
  margin-top: -80px;
  
  h2 {
    text-align: center;
    margin: 15px 0;
  }

  p {
    text-align: justify;
  }

`;

export const BigImage = styled.div<{ bg: string }>`
  width: 400px;
  height: 500px;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center center;
`;
