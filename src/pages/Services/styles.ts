import styled from "styled-components";

export const Services = styled.div`
  padding: 50px 0 150px 0;

  @media ${({ theme }) => theme.media.small} {
    padding-top: 0;
  }
`;

export const ServicesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const ActiveService = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  max-height: 500px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.colors.secondary}10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;

  p {
    position: relative;
    z-index: 2;
    span {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
  .title {
    font-size: 20px;
  }

  .descr {
    margin: 20px 0 40px 0;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  .duration {
    margin-bottom: 10px;
  }
`;

export const ActiveServiceBg = styled.div<{ bgUrl: string }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  background-position: center center;
  opacity: 0.2;
`;
