import styled from 'styled-components';

function Footer() {
    return (
        <ContainerFooter />
    );
}

export default Footer;

const ContainerFooter = styled.div`
    width: 100%;
    height: 80px;
    background: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
`;