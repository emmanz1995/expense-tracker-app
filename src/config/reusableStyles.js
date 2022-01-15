import styled from 'styled-components';
import {Link} from "react-router-dom";

/* -------------------------------- */
/* Reusable Components Style */
/* -------------------------------- */

export const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.main};
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  position: relative;
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

export const StyledTextArea = styled.textarea`
  cursor: pointer;
  position: relative;
  bottom: 42px;
  left: 281px;
  color: ${props => props.theme.main};
`;
