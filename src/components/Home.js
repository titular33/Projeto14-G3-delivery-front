import styled from 'styled-components';

import MenuDrinks from './MenuDrinks';

function Home() {
    return (
        <ContainerContent>
            <Header>
            </Header>

            <ContainerCategories>
                <MenuDrinks />
            </ContainerCategories>

            <Footer>
            </Footer>
        </ContainerContent>
    );
}

export default Home;

const Header = styled.div``;

const ContainerCategories = styled.div``;

const Footer = styled.div``;