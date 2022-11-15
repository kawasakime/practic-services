import styled from "styled-components";

export const Registration = styled.section`
  padding: 50px 0 150px 0;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.small} {
    padding-top: 0;
  }

  @media ${({ theme }) => theme.media.large} {
    justify-content: center;

    aside {
      main {
        max-width: 1000px;
      }
    }
  }

  aside {
    main {
      margin-top: 90px;
      display: flex;
    }
  }

  img {
    max-height: 600px;

    @media ${({ theme }) => theme.media.large} {
      display: none;
    }
  }
`;

export const SmallImageContainer = styled.div`
  padding-left: 45px;
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};

  @media (max-width: 800px) {
    padding-left: 20px;
  }

  img {
    max-height: 350px;

    @media ${({ theme }) => theme.media.large} {
      display: block;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const FormContainer = styled.div`
  p {
    text-align: center;
    margin: 0 40px;
    color: ${({ theme }) => theme.colors.whiteText}80;

    @media ${({ theme }) => theme.media.small} {
      margin: 0;
    }
  }

  form {
    margin-top: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 20px;

      &::placeholder {
        color: ${({ theme }) => theme.colors.whiteText};
      }
    }

    .brn {
      margin-top: 40px;
    }
  }
`;
