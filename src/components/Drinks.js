import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';
import Header from './Header';
import Footer from './Footer';

function Drinks() {
    const { userInformation, drinks, setDrinks, addId } = useContext(UserContext);
    const filtredDrinks = drinks.filter(drink => drink.idCategoria == addId);

    const borderNotSelected = '#ffffff';
    const colorNotSelected = '#000000';

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformation.token}`
            }
        }
        const URL = 'https://g3-delivery.herokuapp.com/drinks';
        const promise = axios.get(URL, config);

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
                    <ContainerCategories border={borderNotSelected} color={colorNotSelected}>
                        <p>Buscando bebida...</p>
                    </ContainerCategories>
            }
            <Footer />
            <ContainerButton>
                <Link to='/cart'>
                    <button>Colocar no carrinho!</button>
                </Link>
            </ContainerButton>
        </ContainerContent>
    );
}

function MappingDrinks(props) {

    const { info } = props

    const { addCart, setAddCart } = useContext(UserContext);

    const [selected, setSelected] = useState(false);

    const borderNotSelected = '#ffffff';
    const borderSelected = '#008000';
    const colorNotSelected = '#000000';
    const colorSelected = '#008000';

    console.log("CARRINHO", addCart)

    if (selected === false) {
        return <ContainerCategories border={borderNotSelected} color={colorNotSelected} onClick={() => {
            setAddCart([...addCart, info._id])
            setSelected(true);
        }
        }>
            <img src={info.image} alt={info.brand}></img>
            <p>{info.name} ({info.brand})<br />R$ {info.price}</p>

        </ContainerCategories>

    } else if (selected === true) {

        return <ContainerCategories border={borderSelected} color={colorSelected} onClick={() => {
            setSelected(false);
            setAddCart(addCart.splice(addCart.indexOf(info.id), 1));
            setAddCart([...addCart]);
        }
        }>
            <img src={info.image} alt={info.brand}></img>
            <p>{info.name} ({info.brand})<br />R$ {info.price}</p>
        </ContainerCategories>
    }
}

export default Drinks;

const ContainerContent = styled.div`
    margin-top: 80px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #DBDBDB;
`;

const ContainerCategories = styled.button`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid ${props => props.border};
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    border-radius: 8px;
    color: ${props => props.color};
    cursor: pointer;

    img {
        width: 110px;
        height: 110px;
    }

    p {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-top: 5px;
        color: ${props => props.color};
    }
`;

const ContainerButton = styled.div`
    button {
        font-family: 'Righteous';
        font-style: normal;
        width: 246px;
        height: 54px;
        background: #9048c8;
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
`;