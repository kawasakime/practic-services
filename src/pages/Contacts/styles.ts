import styled from "styled-components";

export const Contacts = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 35% 65%;
  padding: 50px 0 150px 0;

  @media ${({ theme }) => theme.media.lessLarge} {
    display: flex;
    flex-direction: column;
  }

  @media ${({theme}) => theme.media.small} {
    padding-top: 0;
  }

  .info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .map {
    width: 100%;
    height: 100%;

    @media ${({ theme }) => theme.media.lessLarge} {
      margin-top: 30px;
      height: 350px;
    }
  }
`;
