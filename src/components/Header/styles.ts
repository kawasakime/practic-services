import styled from "styled-components";

export const Header = styled.nav<{ primary: 1 | 0 }>`
  position: relative;
  padding: 30px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  aside {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-left: 60px;

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
  }

  .info {
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.6em;
    font-size: 15px;
    text-align: right;
  }
`;
