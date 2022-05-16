import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';
import Header from './Header';
import Footer from './Footer';

function Drinks() {
    const { userInformation, drinks, setDrinks, addId, addCart, setUserIdCart } = useContext(UserContext);

    const filtredDrinks = drinks.filter(drink => drink.idCategoria == addId);

    useEffect(() => {
        const URL = 'https://g3-delivery.herokuapp.com/drinks';
        const promise = axios.get(URL);

        promise.then((response) => {
            setDrinks(response.data);
        });
        promise.catch(error => {
            console.log(error);
            alert("Deu algum erro...");
        });
    }, []);

    return (
        <ContainerContent>
            <Header />
            {
                filtredDrinks.length > 0 ?


                    filtredDrinks.map(drink => <MappingDrinks info={drink} key={drinks._id} />)
                    :
                    <ContainerCategories>
                        <p>Buscando bebida...</p>
                    </ContainerCategories>

            }
            {
                userInformation ?
                    <Link to='/'>
                        <Button>Escolher outra bebida...</Button>
                    </Link>
                    :

                    <></>
            }
            <Footer />
        </ContainerContent>
    );
}

function MappingDrinks(props) {

    const { info } = props

    const { setAddCart } = useContext(UserContext);
    return (
        <Link to='/selected' style={{ textDecoration: 'none' }} onClick={() => { setAddCart(info) }}>
            <ContainerCategories>
                <img src={info.image} alt={info.brand}></img>
                <p>{info.name} ({info.brand})<br />R$ {info.price}</p>
            </ContainerCategories>
        </Link>
    );
}

export default Drinks;

const ContainerContent = styled.div`
    margin-top: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFE4C4;
`;

const ContainerCategories = styled.div`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    border-radius: 8px;
    cursor: pointer;

    img {
        width: 110px;
        height: 110px;
        margin-left: 10px;
        margin-right: 10px;
    }

    p {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-top: 5px;
        text-decoration: none;
    }
`;

const Button = styled.button`
    font-family: 'Righteous';
    font-style: normal;
    width: 246px;
    height: 54px;
    margin-top: 15px;
    background: #A52A2A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    cursor: pointer;
`;