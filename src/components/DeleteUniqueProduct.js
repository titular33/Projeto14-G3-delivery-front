import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../contexts/UserContext";

export default function DeleteUniqueProduct() {
  const { userInformation, infosDelete } = useContext(UserContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const filtredProduct = infosDelete.find(infoDelete => infoDelete._id === id);

  function Delete() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformation}`,
      },
    };
    const URL = `https://g3-delivery.herokuapp.com/cart/${id}`;
    const promise = axios.delete(URL, config);

    promise.then((response) => {
      alert("Produto deletado");
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
      <ContainerCart>
      <img src={filtredProduct.image} alt={filtredProduct.brand}></img>
      <p>{filtredProduct.name} ({filtredProduct.brand})<br />R$ {filtredProduct.price}</p>
      </ContainerCart>
      <ContainerButton>
          <button onClick={() => Delete()}>Deletar Produto!</button>
      </ContainerButton>
      <Footer />
    </ContainerContent>
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
    margin-left: 10px;
    margin-right: 10px;
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
    background: #A52A2A;
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