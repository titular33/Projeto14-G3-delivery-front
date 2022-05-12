import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';
import Header from './Header';
import Footer from './Footer';

function Drinks() {
    const [drinks, setDrinks] = useState([]);

    const { userInformation, categoryData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformation}`
            }
        }
        const URL = 'https://g3-delivery.herokuapp.com/drinks';
        const promise = axios.get(URL, config);

        promise.then((response) => {
            setDrinks(response.data);
            navigate('/drinks');
        });
        promise.catch(error => {
            console.log(error);
            alert("Deu algum erro...");
        });
    }, []);

    return (
        <ContainerContent>
            <Header />
 

            <ContainerCategories>
                {
                    drinks.category === categoryData ?
                        <>
                            {drinks.category.map(drink => <MappingDrinks info={drink} key={drinks._id} />)}
                        </>
                        :
                        <ContainerEmpty>
                            <p>Não há produtos nessa categoria</p>
                        </ContainerEmpty>
                }
            </ContainerCategories>

            <Footer />
        </ContainerContent>
    );
}

function MappingDrinks(props) {
    const { info } = props;

    return (
        <>
            <p>{info.name}</p>
            <p>{info.brand}</p>
            <p>{info.price}</p>
        </>
    );
}

export default Drinks;

const ContainerContent = styled.div``;

const ContainerCategories = styled.div``;

const ContainerEmpty = styled.div``;