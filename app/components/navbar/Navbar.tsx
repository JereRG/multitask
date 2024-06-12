import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MultiTaskLogo from '/public/MultiTaskLogo.png'; // Asegúrate de que la ruta es correcta

const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 20px;  
    color: #ffffff;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
`;

const AppName = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>
                <Image src={MultiTaskLogo} alt="MultiTask Logo" width={40} height={40} />
            </Logo>
            <AppName>MultiTask</AppName>
        </NavbarContainer>
    );
};

export default Navbar;

/*
Este archivo contiene el componente Navbar, que representa la barra de navegación de la aplicación. 
Incluye el logo de MultiTask y el nombre de la aplicación. 
Utiliza styled-components para los estilos y la imagen del logo es importada desde el directorio /public. 
Asegúrate de que la ruta del logo sea correcta para que se muestre adecuadamente.
*/
