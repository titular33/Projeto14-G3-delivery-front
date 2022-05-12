import styled from 'styled-components';

import MenuDrinks from './MenuDrinks';
import Header from './Header';
import Footer from './Footer';


function Home() {
    return (
        <ContainerContent>
            <Header />
            <ContainerCategories>
                <MenuDrinks />
            </ContainerCategories>
            <Footer />
        </ContainerContent>
    );
}

export default Home;

const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DBDBDB;
`;

const ContainerCategories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;