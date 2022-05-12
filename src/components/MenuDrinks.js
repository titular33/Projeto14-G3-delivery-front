import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import styled from 'styled-components';

function MenuDrinks() {

    const { category } = useParams();

    const { userInformation } = useContext(UserContext);
    const [categoryData, setCategoryData] = useState({ typeOfCategory: '' });

    const choiceCategory = handleCategory();
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
                <Link to='/transaction/sucos' style={{ textDecoration: 'none' }} onClick={() => { choiceCategory }}>
                </Link>
            </ContainerFirstCategory>
            <ContainerSecondCategory>
                <Link to='/transaction/refris' style={{ textDecoration: 'none' }} onClick={() => { choiceCategory }}>
                </Link>
            </ContainerSecondCategory>
            <ContainerThirdCategory>
                <Link to='/transaction/aguas' style={{ textDecoration: 'none' }} onClick={() => { choiceCategory }}>
                </Link>
            </ContainerThirdCategory>
            <ContainerFourthCategory>
                <Link to='/transaction/alcoolicos' style={{ textDecoration: 'none' }} onClick={() => { choiceCategory }}>
                </Link>
            </ContainerFourthCategory>
        </ContainerCategories>
    );
}

export default MenuDrinks;

const ContainerCategories = styled.div``;

const ContainerFirstCategory = styled.div``;

const ContainerSecondCategory = styled.div``;

const ContainerThirdCategory = styled.div``;

const ContainerFourthCategory = styled.div``;