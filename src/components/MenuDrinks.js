import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

function MenuDrinks() {

    const { category } = useParams();

    const { userInformation, setCategoryData } = useContext(UserContext);

    const navigate = useNavigate();

    const objCategory = {
        typeOfCategory: category
    }
    const config = {
        headers: {
            Authorization: `Bearer ${userInformation}`
        }
    }
    const URL = 'https://g3-delivery.herokuapp.com/drinks';

    function handleCategory() {
        const promise = axios.post(URL, objCategory, config);

        promise.then((response) => {
            setCategoryData(response.data);
            navigate('/drinks');
        });

        promise.catch(error => {
            console.log(error);
            alert('Deu algum erro...');
        });
    }

    return (
        <ContainerCategories>
            <ContainerFirstCategory>
                <Link to='/drinks/sucos' style={{ textDecoration: 'none' }} onClick={() => { handleCategory() }}>
                    <p>SUCOS</p>
                </Link>
            </ContainerFirstCategory>
            <ContainerSecondCategory>
                <Link to='/drinks/refris' style={{ textDecoration: 'none' }} onClick={() => { handleCategory() }}>
                    <p>REFRI</p>
                </Link>
            </ContainerSecondCategory>
            <ContainerThirdCategory>
                <Link to='/drinks/aguas' style={{ textDecoration: 'none' }} onClick={() => { handleCategory() }}>
                    <p>AGUAS</p>
                </Link>
            </ContainerThirdCategory>
            <ContainerFourthCategory>
                <Link to='/drinks/alcoolicos' style={{ textDecoration: 'none' }} onClick={() => { handleCategory() }}>
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
    border-radius: 5px;
    border: 1px solid #D5D5D5;

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
    border-radius: 5px;
    border: 1px solid #D5D5D5;

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
    border-radius: 5px;
    border: 1px solid #D5D5D5;

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
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    
    p {
        text-decoration: none;
    }
`;