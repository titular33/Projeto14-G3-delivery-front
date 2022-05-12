import { useContext } from 'react';
import styled from 'styled-components';

import MenuDrinks from './MenuDrinks';
import UserContext from '../contexts/UserContext';

function Home() {

    const { userInformation } = useContext(UserContext); //lembrar de passar a url no back-end {userInformation.urlImage}

    return (
        <ContainerContent>
            <Header>
                <h1>G3 DELIVERY</h1>
                <ContainerUser>
                    <img src="https://pbs.twimg.com/profile_images/1482160849359888385/isP3NAQf_400x400.jpg" alt='photoPerfil' /> 
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="log-out-outline"></ion-icon>
                </ContainerUser>
            </Header>

            <ContainerCategories>
                <MenuDrinks />
            </ContainerCategories>

            <Footer>
            </Footer>
        </ContainerContent>
    );
}

export default Home;

const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DBDBDB;
`;

const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #126BA5;
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

    ion-icon{
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

const ContainerCategories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = styled.div`
    width: 100%;
    height: 80px;
    background: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
`;