import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

import alcoolicos from '../assets/images/alcoolicos.jpg'
import aguas from '../assets/images/aguas.jpg'
import refrigerantes from '../assets/images/refrigerantes.webp'
import sucos from '../assets/images/sucos.jpg'

function MenuDrinks() {
    const { setAddId } = useContext(UserContext);

    return (
        <ContainerCategories>
            <ContainerFirstCategory>
                <Link to='/sucos' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("sucos");
                }}>
                    <p>SUCO</p>
                    <img src={sucos} alt='sucos' />
                </Link>
            </ContainerFirstCategory>
            <ContainerSecondCategory>
                <Link to='/refrigerantes' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("refrigerantes");
                }}>
                    <img src={refrigerantes} alt='refrigerantes' />
                    <p>REFRIGERANTE</p>
                </Link>
            </ContainerSecondCategory>
            <ContainerThirdCategory>
                <Link to='/aguas' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("aguas");
                }}>
                    <img src={aguas} alt='aguas' />
                    <p>ÁGUA</p>
                </Link>
            </ContainerThirdCategory>
            <ContainerFourthCategory>
                <Link to='/alcoolicos' style={{ textDecoration: 'none' }} onClick={() => {

                    setAddId("alcoolicos");
                }}>
                    <img src={alcoolicos} alt='alcoolicos' />
                    <p>ALCOÓLICO</p>
                </Link>
            </ContainerFourthCategory>
        </ContainerCategories>
    );
}

export default MenuDrinks;

const ContainerCategories = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;

    p {
        color: white;
        text-decoration: none;
    }
`;

const ContainerFirstCategory = styled.div`
    position: relative;

    p {
        text-decoration: none;
        position: absolute;
        font-size: 60px;
        margin-top: 33%;
        margin-left: 22%;
    }

    img {
        width: 300px;
        height: 200px;
        margin-top: 20px;
        background-color: #A52A2A;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15); 
    }
`;

const ContainerSecondCategory = styled.div`
    position: relative;

    p {
        text-decoration: none;
        position: absolute;
        font-size: 40px;
        top:50%;
        left:3%;
    }

    img {
        width: 300px;
        height: 200px;
        margin-top: 20px;
        background-color: #A52A2A;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15); 
    }
`;

const ContainerThirdCategory = styled.div`
    position: relative;

    p {
        text-decoration: none;
        position: absolute;
        font-size: 60px;
        top:45%;
        left:25%;
    }

    img {
        width: 300px;
        height: 200px;
        margin-top: 20px;
        background-color: #A52A2A;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15); 
    }
`;

const ContainerFourthCategory = styled.div`
    margin-bottom: 100px;
    position: relative;
    
    p {
        text-decoration: none;
        position: absolute;
        font-size: 45px;
        top:50%;
        left:11%;
    }

    img {
        width: 300px;
        height: 200px;
        margin-top: 20px;
        background-color: #A52A2A;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15); 
    }
`;