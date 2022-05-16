import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';
import Header from './Header';
import Footer from './Footer';


function DrinkSelected() {

    const { addCart, drinks, userInformation, setUserIdCart } = useContext(UserContext);

    const navigate = useNavigate();

    const filtredDrinks = drinks.filter(drink => drink._id === addCart._id);

    function addDrink() {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformation}`,
            },
        };

        const objcart = { ...addCart }

        const objProductCart = {
            name: objcart.name,
            idProduct: objcart._id,
            brand: objcart.brand,
            image: objcart.image,
            price: objcart.price
        }

        const URL = 'https://g3-delivery.herokuapp.com/cart';

        const promise = axios.post(URL, objProductCart, config);

        promise.then((response) => {
            setUserIdCart(response.data);
            navigate("/cart");
        });
        promise.catch(error => {
            console.log(error);
            alert("Deu algum erro...");
        });
    }

    return (
        <ContainerContent>
            <Header />
            {
                <ContainerCart>
                    <img src={filtredDrinks[0].image} alt={filtredDrinks[0].brand}></img>
                    <p>{filtredDrinks[0].name} ({filtredDrinks[0].brand})<br />R$ {filtredDrinks[0].price}</p>
                </ContainerCart>
            }
            <ContainerButton>
                {
                    userInformation?
                    <button onClick={() => { addDrink() }}>Colocar no carrinho!</button>
                    :
                    <Link to='/sign-in'><button>Clique para se logar!</button></Link>
                }
            </ContainerButton>
            <Footer />
        </ContainerContent>
    );
}

export default DrinkSelected;

const ContainerContent = styled.div`
    margin-top: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFE4C4;
`;

const ContainerCart = styled.div`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    border-radius: 8px;

    img {
        width: 110px;
        height: 110px;
        margin-left: 10px;
    }

    p {
      margin-top: 200px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-top: 5px;
        margin-left: 15px;
    }
`;

const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
   
    button {
        font-family: 'Righteous';
        font-style: normal;
        width: 246px;
        height: 54px;
        background: #32CD32;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
        cursor: pointer;
    }

    p {
        color: red;
        margin-top: 8px;
    }
`;