import React, { useState } from 'react';
import { LoginBackground, FormBackground, LoginForm, StyledInput, StyledButton, StyledLink } from './styles';
import AuthAPI from '../../api/AuthAPI';
import useHistoryHook from '../../hooks/useHistory';

function Login() {
    const { navigate } = useHistoryHook();
    const stateValues = {
        email: '',
        password: ''
    }

    const [loginValues, setLoginValues] = useState(stateValues);
    const [loading, setLoading] = useState(false);
    const [revealPassword, setRevealPassword] = useState(false);
    const [error, setError] = useState('');

    const toggleRevealPassword = () => setRevealPassword(!revealPassword);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginValues({ ...loginValues, [name]: value })
    }
    const handleLogin = (evt) => {
        evt.preventDefault();
        const formData = {
            email: loginValues.email,
            password: loginValues.password
        }
        AuthAPI.onLogin(formData).then((results) => {
            console.log('Login results:', results);
            navigate('/dashboard');
        }).catch((error) => {
            console.log(error.response.data.msg);
            setError(error.response.data.msg);
        })
    }
    return (
        <LoginBackground>
            <FormBackground>
                <LoginForm>
                    <h1>Login</h1>
                    {error && <p className="error-alert">{error}</p>}
                    <div className="input-container">
                        <label htmlFor="">Email:</label><br />
                        <StyledInput type="text" name="email" placeholder="john.doe@gmail.com" value={loginValues.email} onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Password:</label><br />
                        <StyledInput type={revealPassword ? 'text' : 'password'} name="password" placeholder="************************" value={loginValues.password} onChange={handleChange} />
                    </div>
                    <StyledLink to="" className="" onClick={toggleRevealPassword}>{!revealPassword ? <i className="far fa-eye" /> : <i className="far fa-eye-slash" />}</StyledLink>
                    <StyledButton type="submit" value="Log In" onClick={handleLogin} />
                </LoginForm>
            </FormBackground>
        </LoginBackground>
    )
}

export default Login;
