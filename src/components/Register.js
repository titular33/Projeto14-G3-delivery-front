import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

function Register() {

    const [infosRegister, setInfosRegister] = useState({ name: "", email: "", password: "", confirmPassword: "", urlImage: "" });

    const inputsRegister = handleInputsRegister();
    const navigate = useNavigate();

    const objRegister = {
        name: infosRegister.name,
        email: infosRegister.email,
        password: infosRegister.password,
        confirmPassword: infosRegister.confirmPassword,
        urlImage: infosRegister.urlImage
    }
    const URL = 'https://g3-delivery.herokuapp.com/sign-up';

    function handleRegister(e) {
        e.preventDefault();
        const promise = axios.post(URL, objRegister);

        promise.then((response) => {
            setInfosRegister(response.data);
            navigate('/sign-in');
        });

        promise.catch(error => {
            console.log(error);
            alert("Deu algum erro no cadastro...");
        });
    }

    function handleInputsRegister() {
        return (
            <form onSubmit={handleRegister}>
                <input
                    type='text'
                    placeholder='nome'
                    name='name'
                    value={infosRegister.name}
                    onChange={e => setInfosRegister({ ...infosRegister, name: e.target.value })}
                    disabled={false}
                    required
                />
                <input
                    type='email'
                    placeholder='email'
                    name='email'
                    value={infosRegister.email}
                    onChange={e => setInfosRegister({ ...infosRegister, email: e.target.value })}
                    disabled={false}
                    required
                />
                <input
                    type='password'
                    placeholder='senha'
                    name='password'
                    value={infosRegister.password}
                    onChange={e => setInfosRegister({ ...infosRegister, password: e.target.value })}
                    disabled={false}
                    required
                />
                <input
                    type='password'
                    placeholder='Confirme a senha'
                    name='confirmPassword'
                    value={infosRegister.confirmPassword}
                    onChange={e => setInfosRegister({ ...infosRegister, confirmPassword: e.target.value })}
                    disabled={false}
                    required
                />
                <input
                    type='url'
                    placeholder='URL da imagem'
                    name='url'
                    value={infosRegister.urlImage}
                    onChange={e => setInfosRegister({ ...infosRegister, urlImage: e.target.value })}
                    disabled={false}
                    required
                />
                <div>
                    <button type='submit'>Cadastrar</button>
                </div>
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
                {inputsRegister}
            </ContainerInputs>
            <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                <p>Já possui uma conta? Faça login!</p>
            </Link>
        </ContainerContent>
    );
}

export default Register;

const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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