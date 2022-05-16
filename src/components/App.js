import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import GlobalStyle from "../assets/GlobalStyle";
import UserContext from "../contexts/UserContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"
import Drinks from "./Drinks";
import Cart from "./Cart";
import DrinkSelected from "./DrinkSelected";

function App() {
    const tokenStorage = JSON.parse(localStorage.getItem('token'));
    const imageStorage = JSON.parse(localStorage.getItem('userImage'));

    const [userInformation, setUserInformation] = useState(tokenStorage, imageStorage);
    const [userImage, setUserImage] = useState("");
    const [drinks, setDrinks] = useState([]);
    const [addCart, setAddCart] = useState([]);
    const [userIdCart, setUserIdCart] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [addId, setAddId] = useState();

    const contextValue = { userInformation, setUserInformation, drinks, setDrinks, addId, setAddId, addCart, setAddCart, userImage, setUserImage, cartProducts, setCartProducts, userIdCart, setUserIdCart };

    useEffect(() => {
        if (tokenStorage) {
            setUserInformation(tokenStorage);
        }
        if (imageStorage) {
            setUserImage(imageStorage);
        }
    }, []);

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/:category' element={<Drinks />} />
                        <Route path='/selected' element={<DrinkSelected />} />
                        <Route path='/sign-up' element={<Register />} />
                        <Route path='/sign-in' element={<Login />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}

export default App;