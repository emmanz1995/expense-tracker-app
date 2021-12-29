import React, { useState } from 'react';
import { LoginBackground, FormBackground, LoginForm, StyledInput, StyledButton, StyledLink } from './styles';
import AuthAPI from '../../api/AuthAPI';
import useHistoryHook from '../../hooks/useHistory';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

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
        setLoading(true);
        AuthAPI.onLogin(formData).then((results) => {
            console.log('Login results:', results);
            toast('Successfully logged in, welcome back!');
            navigate('/dashboard');
            setLoading(false);
            setTimeout(() => window.location.reload(), 5000);
        }).catch((error) => {
            console.log(error.response.data.msg);
            setError(error.response.data.msg);
            setLoading(false);
        })
    }
    if(AuthAPI.getJWT()) {
        return <Navigate to={{ pathname: '/dashboard' }} />
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
                    <StyledButton type="submit" value={loading ? "Logging in..." : "Log In"} onClick={handleLogin} disable={loading} />
                </LoginForm>
            </FormBackground>
        </LoginBackground>
    )
}

export default Login;
