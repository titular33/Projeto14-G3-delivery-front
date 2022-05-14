import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

function MenuDrinks() {
    const { setAddId } = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <ContainerCategories>
            <ContainerFirstCategory>
                <Link to='/drinks/sucos' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("sucos" );
                    navigate('/drinks');
                }}>
                    <p>SUCOS</p>
                </Link>
            </ContainerFirstCategory>
            <ContainerSecondCategory>
                <Link to='/drinks/refris' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("refrigerantes");
                    navigate('/drinks');
                }}>
                    <p>REFRI</p>
                </Link>
            </ContainerSecondCategory>
            <ContainerThirdCategory>
                <Link to='/drinks/aguas' style={{ textDecoration: 'none' }} onClick={() => {
                    setAddId("aguas");
                    navigate('/drinks');
                }}>
                    <p>AGUAS</p>
                </Link>
            </ContainerThirdCategory>
            <ContainerFourthCategory>
                <Link to='/drinks/alcoolicos' style={{ textDecoration: 'none' }} onClick={() => {

                    setAddId("alcoolicos");
                    navigate('/drinks');
                }}>
                    <p>ALCOOLICOS</p>
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
    width: 300px;
    height: 200px;
    margin-top: 20px;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);

    p {
        text-decoration: none;
    }
`;

const ContainerSecondCategory = styled.div`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);

    p {
        text-decoration: none;
    }
`;

const ContainerThirdCategory = styled.div`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);

    p {
        text-decoration: none;
    }
`;

const ContainerFourthCategory = styled.div`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 100px;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
    
    p {
        text-decoration: none;
    }
`;