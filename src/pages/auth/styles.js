import styled from 'styled-components';
import BackgroundImg from '../../assets/background-2633962_1920.jpg';
import { Link } from 'react-router-dom';

/* -------------------------------- */
/* login Component Styles */
/* -------------------------------- */

export const LoginBackground = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-image: url(${ BackgroundImg });
  background-repeat: no-repeat;
  background-position: center;
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
  .error-alert {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 10px;
    border-radius: 4px;
  }
`;

/* -------------------------------- */
    /* Register Component Styles */
/* -------------------------------- */

export const RegisterContainer = styled.main`
  height: 100vh;
  display: flex;
  //align-items: center;
  justify-content: space-between;
  width: 100vw;
  // background-image: url(${BackgroundImg});
  // background-repeat: no-repeat;
  // background-position: center;
`;

export const RegisterFormContainer = styled.form`
  width: 25%;
  height: 100%;
  padding: 35px;
  .input-container {
    margin: 10px 0;
  }
`;

export const InfoContainer = styled.div`
  width: 75%;
  padding: 35px;
  background-image: url(${BackgroundImg});
  color: ${props => props.theme.primary};
  .info-wrapper {
    width: 50%;
    text-align: justify;
    padding: 20px 0;
  }
`;

// export const LoginForm = styled.form`
//   margin: 10px;
//   padding: 35px;
//   color: ${props => props.theme.main};
//   position: relative;
//   .input-container {
//     margin: 15px 0;
//   }
//   .error-alert {
//     background-color: #f8d7da;
//     color: #721c24;
//     border: 1px solid #f5c6cb;
//     padding: 10px;
//     border-radius: 4px;
//   }
// `;

export const ErrorAlert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 10px;
  border-radius: 4px;
`
