import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

function Drinks() {
    const [drinks, setDrinks] = useState([]);

    const { userInformation } = useContext(UserContext);
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
            <Header>
            </Header>

            <ContainerCategories>
                {
                    <>
                        {drinks.map(drink => <MappingDrinks info={drink} key={drinks._id} />)}
                    </>
                }
            </ContainerCategories>

            <Footer>
            </Footer>
        </ContainerContent>
    );
}

function MappingDrinks(props) {
    const { info } = props;

    return (
        <>
            <p>{info.name}</p>
            <p>{info.description}</p>
            <p>{info.price}</p>
        </>
    );
}

export default Drinks;

const ContainerContent = styled.div``;

const Header = styled.div``;

const ContainerCategories = styled.div``;

const Footer = styled.div``;