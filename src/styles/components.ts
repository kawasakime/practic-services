import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
`;

export const Logo = styled.h1<{ primary: 1 | 0 }>`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 30px;
  color: ${({ theme, primary = 1 }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  text-transform: uppercase;
`;

export const Button = styled(Link)<{ primary?: 1 | 0 }>`
  display: grid;
  place-items: center;
  height: 45px;
  width: 215px;
  transition: ${({ theme }) => theme.duration};
  background: none;
  cursor: pointer;

  border: 1px solid
    ${({ theme, primary = 1 }) =>
      primary ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme, primary = 1 }) =>
    primary ? theme.colors.primary : theme.colors.secondary};

  &:hover {
    background: ${({ theme, primary = 1 }) =>
      primary ? theme.colors.primary : theme.colors.secondary};
    color: ${({ theme, primary = 1 }) =>
      primary ? theme.colors.secondary : theme.colors.primary};
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0 15px;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
