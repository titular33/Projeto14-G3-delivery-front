import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import Register from './Register';
import GlobalStyle from '../assets/GlobalStyle';

function App() {

    const [userInformation, setUserInformation] = useState(tokenStorage);

    const contextValue = { userInformation, setUserInformation };

    const tokenStorage = JSON.parse(localStorage.getItem('token'));


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
                        <Route path='/home' element={<Home />} />
                        <Route path='/sign-up' element={<Register />} />
                        <Route path='/sign-in' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}

export default App;