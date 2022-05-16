import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

import alcoolicos from '../assets/images/alcoolicos.jpg'
import aguas from '../assets/images/aguas.jpg'
import refrigerantes from '../assets/images/refrigerantes.webp'
import sucos from '../assets/images/sucos.jpg'

function MenuDrinks() {
    const { setAddId } = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <ContainerCategories>
            <ContainerFirstCategory>
                <Link to='/drinks/sucos' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("sucos");
                    navigate('/drinks');
                }}>
                    <img src={sucos} alt='sucos' />
                </Link>
                <p>SUCO</p>
            </ContainerFirstCategory>
            <ContainerSecondCategory>
                <Link to='/drinks/refrigerantes' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("refrigerantes");
                    navigate('/drinks');
                }}>
                    <img src={refrigerantes} alt='refrigerantes' />
                    <p>REFRIGERANTE</p>
                </Link>
            </ContainerSecondCategory>
            <ContainerThirdCategory>
                <Link to='/drinks/aguas' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("aguas");
                    navigate('/drinks');
                }}>
                    <img src={aguas} alt='aguas' />
                    <p>ÁGUA</p>
                </Link>
            </ContainerThirdCategory>
            <ContainerFourthCategory>
                <Link to='/drinks/alcoolicos' style={{ textDecoration: 'none' }} onClick={() => {

                    setAddId("alcoolicos");
                    navigate('/drinks');
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

    p {
        text-decoration: none;
        position: absolute;
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
        position: relative;
    }
`;

const ContainerSecondCategory = styled.div`
    p {
        text-decoration: none;
        position: absolute;
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
        position: relative;
    }
`;

const ContainerThirdCategory = styled.div`
    p {
        text-decoration: none;
        position: absolute;
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
        position: relative;
    }
`;

const ContainerFourthCategory = styled.div`
    margin-bottom: 100px;
    
    p {
        text-decoration: none;
        position: absolute;
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
        position: relative;
    }
`;