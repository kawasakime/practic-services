import styled from "styled-components";

export const Contacts = styled.div`
  height: 400px;
  display: grid;
  place-items: center;
  grid-template-columns: 35% 65%;
  /* padding: 50px 0 150px 0; */

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
      a {
        color: ${({theme}) => theme.colors.primary}90;
        margin: 0 15px;
        &:hover {
        color: ${({theme}) => theme.colors.primary};
          text-decoration: underline;
        }
      }
    }
  }

  .map {
    width: 100%;
    height: 100%;
  }
`