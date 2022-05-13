import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

import { UserContext } from "../contexts/UserContext";

export default function Cart() {
  const { userInfos } = useContext(UserContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [change, setChange] = useState(0);
  const [cartStatus, setCartStatus] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const URL = "http://localhost:3000";
    async function getCart() {
      try {
        const cart = await axios.get(`${URL}/cart`, config);
        let somatorio = 0;
        let somatorioItem = 0;
        setCart(cart.data);
        cart.data.forEach((cart) => {
          somatorio += cart.value * cart.quant;
          somatorioItem += cart.quant;
        });
        setTotalItems(somatorioItem);
        setTotal(somatorio.toFixed(2));
      } catch (e) {
        console.log("Houve problema na requisição do carrinho" + e);
        Swal.fire({
          icon: "warning",
          title: "Sessão Experidada",
          text: 'Faça Login Novamente',
          width: 326,
          background: "#F3EED9",
          confirmButtonColor: "#4E0000",
          color: "#4E0000"
        });
        navigate("/");
      }
    }
    getCart();
  }, [userInfos.token, navigate, change]);

  function handleButton() {
    navigate("/confirm", { state: { totalValue: total } });
  }

  async function deleteProduct(productId) {
    const URL = "http://localhost:3000";
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    try {
      await axios.delete(`${URL}/cart/${productId}`, config);
      setChange(change + 1);
    } catch (e) {
      console.log("Houve problema na exclusão do produto do seu carrinho" + e);
      Swal.fire({
        icon: "error",
        title: "Ops! Algo deu Errado",
        text: 'Tente Novamamente Mais Tarde',
        width: 326,
        background: "#F3EED9",
        confirmButtonColor: "#4E0000",
        color: "#4E0000"
      });
    }
  }

  async function handleQuant(productId, increaseQuant) {
    setCartStatus(true);
    const URL = "http://localhost:3000";
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    try {
      await axios.post(
        `${URL}/changeQuant`,
        { productId, increaseQuant },
        config
      );
      setChange(change + 1);
      setTimeout(() => { setCartStatus(false) }, 200);
    } catch (e) {
      console.log(
        "Houve problema na mudança de quantidade do produto do seu carrinho" + e
      );
      Swal.fire({
        icon: "error",
        title: "Ops! Algo deu Errado",
        text: 'Tente Novamamente Mais Tarde',
        width: 326,
        background: "#F3EED9",
        confirmButtonColor: "#4E0000",
        color: "#4E0000"
      });
      setCartStatus(false);
    }
  }

  return !cart.length <= 0 ? (
    <>
      <Header change={change} />
      <CartSection>
        <button onClick={() => handleButton()}>
          Fechar compra ({totalItems} Itens)
        </button>
        {cart?.map((cart) => {
          return (
            <ContainerCart key={cart._id}>
              <img src={cart.image} alt=""></img>
              <article>
                <h2>{cart.name}</h2>
                <h3>R$ {cart.value.toString().replace(".", ",")}</h3>
                <ContainerQuant cartStatus={cartStatus} cartQuant={cart.quant}>
                  <ion-icon
                    name="remove-circle"
                    onClick={() => handleQuant(cart._id, false)}
                  >
                  </ion-icon>
                  <p>{cart.quant}</p>
                  <ion-icon
                    name="add-circle"
                    onClick={() => handleQuant(cart._id, true)}
                  ></ion-icon>
                </ContainerQuant>
              </article>
              <ion-icon
                name="trash-bin"
                onClick={() => {
                  deleteProduct(cart._id);
                }}
              ></ion-icon>
            </ContainerCart>
          );
        })}
        <footer>
          <p>Subtotal</p>
          <p>R$ {total.toString().replace(".", ",")}</p>
        </footer>
      </CartSection>
    </>
  ) : <CartSection>
    <Header />
    <h4>Carrinho Vazio</h4>
  </CartSection>;
}

const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;`

const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  h4 {
      margin-top: 200px;
      font-family: 'Fredoka One', cursive;
      font-weight: 400;
      font-size: 20px;
      line-height: 19px;
      color: #F3EED9;
    }
  button {
    margin-top: 16px;
    width: 337px;
    height: 47px;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f3eed9;
    box-shadow: 0px -7px 4px rgba(0, 0, 0, 0.25);
    height: 51px;
    font-family: "Fredoka One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    color: #4e0000;
    margin-top: 15px;
  }
`;

const ContainerCart = styled.div`
  display: flex;
  width: 338px;
  height: 146px;
  background: #f3eed9;
  border-radius: 5px;
  margin-top: 13px;
  position: relative;
  p {
    font-family: "Fredoka One";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #4e0000;
  }
  img {
    width: 87px;
    height: 125px;
    border-radius: 5px;
    margin-top: 11px;
    margin-left: 10px;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #4e0000;
    margin-left: 9px;
  }
  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #ec665c;
    margin-left: 13px;
  }
  ion-icon {
    color: #4e0000;
    font-size: 25px;
    margin-bottom: 13px;
    position: absolute;
    bottom: 0;
    right: 7px;
    visibility: visible;
  }
`;

const ContainerQuant = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  margin-left: 10px;
  margin-top: 5px;
  ion-icon:first-child {
    visibility: ${({ cartQuant }) => cartQuant <= 1 ? "hidden" : "visible"} 
  }
  ion-icon {
    pointer-events: ${(props) => props.cartStatus ? "none" : "auto"};
    position: relative;
    margin-left: 15px;
  }
  p {
    margin-top: 2px;
  }
`;