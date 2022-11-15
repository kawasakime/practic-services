import styled from "styled-components";

export const Cards = styled.section`
  padding: 100px 0px 120px 0px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const CardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 40px;
  place-content: center;

  @media (max-width: 1150px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1150px) {
    max-width: 330px;
  }

  @media (max-width: 760px) {
    max-width: none;
  }

  & > * {
    color: ${({ theme }) => theme.colors.blackText};
  }

  img {
    width: 50%;
    align-self: center;
    margin: 0 auto;
    max-width: 150px;
  }

  p {
    font-size: 20px;
    text-align: center;
    margin: 40px 0;
  }

  span {
    font-size: 15px;
    text-align: justify;
  }
`;
