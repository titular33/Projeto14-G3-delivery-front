import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";

export default function Cart() {
  const { userInformation, userIdCart, cartProducts, setCartProducts } = useContext(UserContext);

  console.log("user de quem ta usando o carrinho", userIdCart)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformation}`,
      },
    };
    const URL = 'https://g3-delivery.herokuapp.com/cart';
    const promise = axios.get(URL, config);

    promise.then((response) => {
      setCartProducts(response.data);
    });
    promise.catch(error => {
      console.log(error);
      alert("Deu algum erro no get do carrinho...");
    });
  }, []);

  return (
    cartProducts.length > 0 ?
      <ContainerContent>
        <Header />
        {
          cartProducts.map(cartProduct => <MappingProductsCart info={cartProduct} />)
        }
        <Footer />
      </ContainerContent>
      :
      <></>
  );
}

function MappingProductsCart(props) {

  const { info } = props;

  return (
    <ContainerCart>
      <img src={info.image} alt={info.brand}></img>
      <p>{info.name} ({info.brand})<br />R$ {info.price}</p>
    </ContainerCart>
  );

}

const ContainerContent = styled.div`
    margin-top: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFE4C4;
    margin-bottom: 100px;
`;

const ContainerCart = styled.div`
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

    img {
        width: 110px;
        height: 110px;
    }

    p {
      margin-top: 200px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-top: 5px;
    }
`;