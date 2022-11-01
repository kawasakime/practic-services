import styled from "styled-components";

export const AboutUs = styled.section`
  padding: 100px 0 150px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 60vh;
    min-height: 500px;
    margin-left: 50px;
  }
`;

export const Information = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  padding-left: 80px;
  max-width: 600px;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 40px;
  }

  p {
    margin: 25px 0 60px 0;
  }
`;
