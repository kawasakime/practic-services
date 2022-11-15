import styled from "styled-components";

export const Benefits = styled.section`
  padding: 100px 0 50px 0;
  background: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

export const BenefitsContainer = styled.section`
  position: relative;

  @media ${({ theme }) => theme.media.lessLarge} {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media ${({ theme }) => theme.media.medium} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const BenefitItem = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.media.lessLarge} {
    width: 48%;
  }

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }

  p {
    max-width: 400px;
    color: ${({ theme }) => theme.colors.blackText};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BenefitItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  min-width: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 20px;

  @media ${({ theme }) => theme.media.lessLarge} {
    min-height: 70px;
    min-width: 70px;

    img {
      width: 60%;
    }
  }
`;

export const BenefitImage = styled.img`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  max-height: 100%;

  @media ${({ theme }) => theme.media.lessLarge} {
    opacity: 0.2;
    right: 50%;
    transform: translateX(50%);
  }
`;
