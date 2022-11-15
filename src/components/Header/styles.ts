import styled from "styled-components";

export const Header = styled.nav<{ primary: 1 | 0 }>`
  position: relative;
  padding: 30px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({theme}) => theme.media.small} {
    padding-top: 15px;
  }

  aside {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 102;
    
    @media ${({theme}) => theme.media.large} {

      margin: 20px 0;

      a {
        margin-left: 30px;
      }

      ul {
        display: none;
      }
    }
  }

  .info {
    color: ${({ theme }) => theme.colors.whiteText};
    line-height: 1.6em;
    font-size: 15px;
    text-align: right;

    @media ${({theme}) => theme.media.medium} {
      font-size: 13px;
    }

    @media ${({theme}) => theme.media.small} {
      display: none;
    }
  }
`;
