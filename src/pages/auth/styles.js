import styled from 'styled-components';
import BackgroundImg from '../../assets/background-2633962_1920.jpg';
import { Link } from 'react-router-dom';

export const LoginBackground = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  //opacity: .7;
  //background-color: #000;
`;

export const FormBackground = styled.div`
  width: 400px;
  height: 450px;
  background-color: ${props => props.theme.primary};
  border-radius: 5px;
`;

export const LoginForm = styled.form`
  margin: 10px;
  padding: 35px;
  color: ${props => props.theme.main};
  position: relative;
  .input-container {
    margin: 15px 0;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.main};
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  position: relative;
  //top: 0;
  //left: 0;
  &:focus {
    outline: 1px solid ${props => props.theme.main};
  }
`;

export const StyledButton = styled.input`
  border: 1px solid ${props => props.theme.main};
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  color: ${props => props.theme.main};
  padding: 8px;
  margin: 15px 0;
  &:hover {
    color: ${props => props.theme.primary};
    transition: all 0.2s ease-in-out;
    background-color: ${props => props.theme.main};
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  position: relative;
  bottom: 42px;
  left: 281px;
  color: ${props => props.theme.main};
`;
