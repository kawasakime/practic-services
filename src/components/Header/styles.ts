import styled from "styled-components";

export const Header = styled.nav<{ primary: 1 | 0 }>`
  padding: 30px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    
    li {
      margin: 0 20px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      a {
        color: ${({ theme, primary }) =>
          primary ? theme.colors.primary : theme.colors.secondary};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
