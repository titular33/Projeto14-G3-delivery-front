import { useEffect, useState, useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";

export default function Cart() {
  const { userInformation, userIdCart, cartProducts, setCartProducts } = useContext(UserContext);

  const [productsSold, setProductsSold] = useState();

  const navigate = useNavigate();

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

  function calculateTotal() {
    let total = 0;
    cartProducts.forEach(cartProduct => {
      total += parseFloat(cartProduct.price.replace(",", "."));
    });

    return (
      <ContainerTotal>
        <p>Valor Total: R$ {total.toFixed(2)}</p>
      </ContainerTotal>
    );
  }

  function finishOrder() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformation}`,
      },
    };
    const URL = 'https://g3-delivery.herokuapp.com/cart';
    const promise = axios.post(URL, cartProducts, config);

    promise.then((response) => {
      setProductsSold(response.data);
      alert("Compra confirmada!")
      navigate("/");
    });
    promise.catch(error => {
      console.log(error);
      alert("Deu algum erro...");
    });
  }

  return (
    cartProducts.length > 0 ?
      <ContainerContent>
        <Header />
        {
          cartProducts.map(cartProduct => <MappingProductsCart info={cartProduct} />)
        }
        <ContainerTotal>
          {calculateTotal()}
        </ContainerTotal>
        <ContainerButton>
          <button onClick={() => { finishOrder() }}>Finalizar Compra</button>
        </ContainerButton>
        <Link to='/'>
            <Button>Adicionar outra bebida...</Button>
          </Link>
        <Footer />
      </ContainerContent>
      :
      <ContainerContent>
        <Header />
        <Footer />
      </ContainerContent>
  );
}

function MappingProductsCart(props) {
  const { info } = props;
  const { id } = useParams;

  const { userInformation } = useContext(UserContext);
  const navigate = useNavigate();

  function deleteProduct() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformation}`,
      },
    };
    const URL = 'https://g3-delivery.herokuapp.com/cart/:id';
    const promise = axios.delete(URL, config);

    promise.then((response) => {
      alert("Produto retirado do carrinho!")
      navigate("/cart");
    });
    promise.catch(error => {
      console.log(error);
      alert("Deu algum erro...");
    });
  }

  return (
    <ContainerCart>
      <img src={info.image} alt={info.brand}></img>
      <p>{info.name} ({info.brand})<br />R$ {info.price}</p>
      <ion-icon name="trash-outline" onClick={() => {
        deleteProduct();
      }}>
      </ion-icon>
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
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;

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

  ion-icon {
    font-size:25px;
    color: black;
    cursor:pointer;
    position: absolute;
    margin-bottom: 50%;
    margin-left: 80%;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
   
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
`;

const ContainerTotal = styled.div`
  p {
    font-size: 20px;
    margin-top: 20px;
    color: red;
  }
`;

const Button = styled.button`
    font-family: 'Righteous';
    font-style: normal;
    width: 246px;
    height: 54px;
    margin-top: 10px;
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