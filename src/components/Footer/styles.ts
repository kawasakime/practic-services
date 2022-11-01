import styled from "styled-components";

export const Footer = styled.footer`
  height: 400px;
  display: flex;
  box-shadow: 0px 0px 10px 0 ${({theme}) => theme.colors.primary}30;

  .content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .map {
    width: 50%;
    height: 100%;
  }
`