import React, { useState } from 'react';
import { RegisterContainer, RegisterFormContainer, InfoContainer, StyledInput, StyledButton, ErrorAlert } from './styles';
import AuthAPI from '../../api/AuthAPI';
import { toast, ToastContainer } from 'react-toastify';
import useHistoryHook from '../../hooks/useHistory';

function Register() {
    const { navigate } = useHistoryHook();
    const initialValue = {
        firstname: '',
        surname: '',
        email: '',
        username: '',
        dob: '',
        password: ''
    }
    const [initialState, setInitialState] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setInitialState({ ...initialState, [name]: value });
    }

    const handleRegister = (evt) => {
        evt.preventDefault();
        setLoading(true);
        const formData = {
            firstname: initialState.firstname,
            surname: initialState.surname,
            email: initialState.email,
            username: initialState.username,
            dob: initialState.dob,
            password: initialState.password
        }
        AuthAPI.onRegister(formData).then((results) => {
            toast('Successfully Registered your Account!');
            console.log(results);
            navigate('/login');
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setError(error.response.data.msg);
            setLoading(false);
        })
    }
    return (
        <RegisterContainer>
            <RegisterFormContainer onSubmit={handleRegister}>
                <h1>Register</h1><hr />
                {error && <ErrorAlert>{error}</ErrorAlert>}
                <div className="input-container">
                    <label htmlFor="email">First name:</label>
                    <StyledInput type="text" name="firstname" placeholder="John" value={initialState.firstname} onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Surname:</label>
                    <StyledInput type="text" name="surname" placeholder="Doe" value={initialState.surname} onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <StyledInput type="text" name="email" placeholder="john.doe@gmail.com" value={initialState.email} onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Username:</label>
                    <StyledInput type="text" name="username" placeholder="johnDoe90" value={initialState.username} onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Date Of Birth:</label>
                    <StyledInput type="date" name="dob" placeholder="john.doe@gmail.com" value={initialState.dob} onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Password:</label>
                    <StyledInput type="password" name="password" placeholder="********************" value={initialState.password} onChange={handleChange} />
                </div>
                <StyledButton type="submit" value={loading ? "Registering..." : "Join Now!"} disabled={loading} />
                <StyledButton type="submit" value="Back to Login" onClick={() => navigate('/login')} />
            </RegisterFormContainer>
            <InfoContainer>
                <h2>Get your Account Now!</h2>
                <div className="info-wrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aperiam, asperiores aut autem blanditiis consequuntur culpa delectus dolore esse expedita facilis id in incidunt iure, magni nulla officiis quia quidem rem rerum sapiente tempora voluptas? Animi, asperiores, assumenda dolorem doloribus expedita illo in laborum modi molestias nihil omnis ratione!</p>
                </div>
            </InfoContainer>
            <ToastContainer
                position="top-center"
            />
        </RegisterContainer>

    );
}

export default Register;
