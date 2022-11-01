import styled from "styled-components";

export const Registration = styled.section`
  padding: 100px 0 150px 0;
  display: flex;
  justify-content: space-between;

  aside {
    main {
      margin-top: 90px;
      display: flex;
    }
  }

  img {
    max-height: 600px;
  }
`;

export const SmallImageContainer = styled.div`
  padding-left: 45px;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};

  img {
    max-height: 350px;
  }
`;

export const FormContainer = styled.div`
  p {
    text-align: center;
    margin: 0 40px;
    color: ${({ theme }) => theme.colors.primary}80;
  }

  form {
    margin-top: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    input {
      margin-bottom: 20px;
    }

    .brn {
      margin-top: 40px;
    }
  }
`;