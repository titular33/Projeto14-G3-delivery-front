import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import GlobalStyle from "../assets/GlobalStyle";
import UserContext from "../contexts/UserContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"
import Drinks from "./Drinks";
import Cart from "./Cart";

function App() {

    const tokenStorage = JSON.parse(localStorage.getItem('token'));

    const [userInformation, setUserInformation] = useState(tokenStorage);

    const contextValue = { userInformation, setUserInformation };

    useEffect(() => {
        if (tokenStorage) {
            setUserInformation(tokenStorage);
        }
    }, []);

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/drinks/:category' element={<Drinks />} />
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