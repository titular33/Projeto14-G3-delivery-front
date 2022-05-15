import styled from 'styled-components';

function Footer() {
    return (
        <ContainerFooter>
            <p>Copyright©2001-2022, G3 Delivery Company</p>
        </ContainerFooter>
    );
}

export default Footer;

const ContainerFooter = styled.div`
    width: 100%;
    height: 80px;
    background: #A52A2A;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
    left: 0;

    p {
        color: white;
        font-size: 14px;
        margin-right: 20px;
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`;