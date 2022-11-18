import styled from "styled-components";

export const Team = styled.section`
  padding: 50px 0 150px 0;
  color: ${({ theme }) => theme.colors.secondary} !important;

  @media ${({ theme }) => theme.media.medium} {
    .title {
      padding-left: 20px;
    }
  }

  @media ${({ theme }) => theme.media.small} {
    padding-top: 0;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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

export const ActiveSlidePerson = styled.div`
  color: ${({ theme }) => theme.colors.secondary};

  h2 {
    text-align: center;
    margin: 15px 0;
  }

  p {
    text-align: justify;
    line-height: 1.5em;
  }
`;

export const BigImage = styled.div<{ bg: string }>`
  width: 100%;
  height: 500px;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center center;
`;
