import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

function Login() {
    const { setUserInformation } = useContext(UserContext);
    const [infosLogin, setInfosLogin] = useState({ email: '', password: '' });

    const inputsLogin = handleInputsLogin();
    const navigate = useNavigate();

    const objLogin = {
        email: infosLogin.email,
        password: infosLogin.password
    }
    const URL = 'https://g3-delivery.herokuapp.com/sign-in';

    function handleLogin(e) {
        e.preventDefault();
        const promise = axios.post(URL, objLogin);

        promise.then((response) => {
            setUserInformation(response.data.token);
            const user = JSON.stringify(response.data.token);
            localStorage.setItem('token', user);
            navigate('/home');
        });

        promise.catch(error => {
            console.log(error);
            alert('Usuário ou senha incorretos...');
        });
    }

    function handleInputsLogin() {
        return (
            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    placeholder='email'
                    name='email'
                    value={infosLogin.email}
                    onChange={e => setInfosLogin({ ...infosLogin, email: e.target.value })}
                    disabled={false}
                    required
                />
                <input
                    type='password'
                    placeholder='senha'
                    name='password'
                    value={infosLogin.senha}
                    onChange={e => setInfosLogin({ ...infosLogin, password: e.target.value })}
                    disabled={false}
                    required
                />
                <button type='submit'>Entrar</button>
            </form>
        );
    }

    return (
        <ContainerContent>
            <ContainerLogo>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1>G3 DELIVERY</h1>
                </Link>
            </ContainerLogo>
            <ContainerInputs>
                {inputsLogin}
            </ContainerInputs>
            <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContainerContent>
    );
}

export default Login;

const ContainerContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #126BA5;
    p {
        //font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-align: center;
    }
`;

const ContainerLogo = styled.div`
    h1 {
        width: 200px;
        height: 50px;
        //font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 24px;
    }
`;

const ContainerInputs = styled.div`
    input {
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 13px;
        display: flex;
        flex-direction: column;
        //font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #000000;
        padding-left: 14px;
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    input::placeholder {
        //font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    button {
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        //font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        border: none;
        color: #FFFFFF;
        margin-bottom: 25px;
        cursor: pointer;
    }
`;