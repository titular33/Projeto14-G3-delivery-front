import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import UserContext from '../contexts/UserContext';
import perfil_default from '../assets/images/perfil_default.png'

function Header() {

    const { setUserInformation, userInformation, userImage, setAddCart } = useContext(UserContext);
    const navigate = useNavigate();

    function logOut() {
        if (window.confirm("Você deseja se deslogar?")) {
            window.localStorage.removeItem('user');
            window.localStorage.clear('user');
            setUserInformation(null);
            setAddCart([]);
            navigate("/");
        }
    }

    return (
        <ContainerHeader>
            <Link to='/' style={{ textDecoration: 'none' }} onClick={() => {
                setAddCart([]);
            }}>
                <h1>G3 DELIVERY</h1>
            </Link>
            <ContainerUser>
                <Link to='sign-in' style={{ textDecoration: 'none' }}>
                    <img src={userInformation ? `${userImage}` : perfil_default} alt='photoPerfil' />
                </Link>

                {
                    userInformation ?
                        <Link to='/cart'>
                            <ion-icon name="cart-outline"></ion-icon>
                        </Link>
                        :
                        <ion-icon name="cart-outline"></ion-icon>
                }
                <ion-icon name="log-out-outline" onClick={() => { logOut() }}></ion-icon>
            </ContainerUser>
        </ContainerHeader>
    );
}

export default Header;

const ContainerHeader = styled.div`
    width: 100%;
    height: 80px;
    background: #A52A2A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-left: 18px;
    }

    ion-icon {
        font-size:30px;
        color:white;
        margin-top: 8.56px;
        margin-left: 9.56px;
        cursor:pointer;
    }
`;

const ContainerUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;