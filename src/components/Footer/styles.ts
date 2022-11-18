import styled from "styled-components";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 50px 0;
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.colors.secondary};

  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;

    @media ${({ theme }) => theme.media.medium} {
      flex-direction: column;
      align-items: center;
    }

    aside {
      display: flex;
      align-items: flex-start !important;

      @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;
        align-items: center !important;
        gap: 30px;
        align-items: center !important;

        ul {
          margin: 0;
          align-items: center;
        }
      }
    }

    p {
      color: ${({ theme }) => theme.colors.whiteText};
      text-align: right;
      line-height: 2em;
      margin-top: 20px;

      @media ${({ theme }) => theme.media.medium} {
        text-align: center;
      }

      a {
        color: ${({ theme }) => theme.colors.whiteText}90;
      }
    }
  }
`;
