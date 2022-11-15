import styled from "styled-components";

export const AboutUs = styled.section`
  padding: 50px 0 150px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.small} {
    padding-top: 0;
  }

  @media ${({ theme }) => theme.media.lessLarge} {
    align-items: flex-start;
  }

  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    align-items: center;
  }

  img {
    max-height: 60vh;
    min-height: 500px;
    height: auto;
    margin-left: 50px;

    @media ${({ theme }) => theme.media.lessLarge} {
      max-height: auto;
      min-height: auto;
      width: 280px;
    }

    @media ${({ theme }) => theme.media.medium} {
      max-height: none;
      margin-left: 0;
      margin-top: 30px;
      width: 100%;
    }
  }
`;

export const Information = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-left: 80px;
  max-width: 600px;

  @media ${({ theme }) => theme.media.lessLarge} {
    padding-left: 50px;
  }

  @media ${({ theme }) => theme.media.medium} {
    padding-left: 30px;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 40px;
  }

  p {
    margin: 25px 0 60px 0;
  }
`;
