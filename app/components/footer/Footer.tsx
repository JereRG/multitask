import React from "react";
import styled, { keyframes } from "styled-components";

// Animación para las olas
const waveAnimation1 = keyframes`
    0% { transform: translate(270px, 230px); }
    50% { transform: translate(-334px, 180px); }
    100% { transform: translate(270px, 230px); }
`;

const waveAnimation2 = keyframes`
    0% { transform: translate(-270px, 230px); }
    60% { transform: translate(243px, 220px); }
    100% { transform: translate(-270px, 230px); }
`;

const waveAnimation3 = keyframes`
    0% { transform: translate(0px, 230px); }
    40% { transform: translate(-140px, 200px); }
    100% { transform: translate(0px, 230px); }
`;

// Estilos para el fondo de las olas
const Background = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(3) scaleX(2.25);
        transform-origin: bottom;
        display: block;
        pointer-events: none;
    }

    use:nth-child(1) {
        animation: ${waveAnimation1} 8s infinite cubic-bezier(0.42, 0, 0.58, 1);
        opacity: 0.4;
    }

    use:nth-child(2) {
        animation: ${waveAnimation2} 6s infinite cubic-bezier(0.42, 0, 0.58, 1);
        opacity: 0.6;
    }

    use:nth-child(3) {
        animation: ${waveAnimation3} 4s infinite cubic-bezier(0.42, 0, 0.58, 1);
        opacity: 0.9;
    }
`;

// Estilos para el footer
const FooterContainer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 370px;
    background: linear-gradient(rgb(99, 99, 99));
    font-family: 'Poppins', sans-serif;
    color: #d6dfed;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
    padding-bottom: 80px;
    padding-left: 60px;
    width: 100%;

    @media (min-width: 420px) {
        align-items: center;
        padding-left: 0;
        gap: 20px;
    }
`;

// Estilos para los enlaces de redes sociales y los enlaces generales
const Socials = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;

    a {
        font-size: 24px;
        color: inherit;
        text-decoration: none;
    }
`;

const Links = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
    padding: 0;
    margin: 0;

    @media (min-width: 420px) {
        gap: 20px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const Legal = styled.p`
    font-size: 20px;
    margin: 0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Background>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900">
                    <defs>
                        <path id="wave" fill="rgba(96, 95, 95, 0.6)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                        s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" />
                        <use xlinkHref="#wave" />
                        <use xlinkHref="#wave" />
                    </g>
                </svg>
            </Background>
            <Section>
                <Socials>
                <li><a href="https://twitter.com" className="fa-brands fa-x-twitter"></a></li>
                <li><a href="https://facebook.com" className="fa-brands fa-facebook"></a></li>
                <li><a href="https://linkedin.com" className="fa-brands fa-linkedin"></a></li>
                </Socials>
                <Legal>© 2024 MultiTask | Todos los Derechos Reservados</Legal>
            </Section>
        </FooterContainer>
    );
};

export default Footer;

/*
Este archivo define el componente Footer que representa el pie de página de la aplicación.
- Define animaciones y estilos para las olas de fondo.
- Utiliza styled-components para estilizar el componente.
- Renderiza enlaces de redes sociales y texto legal.
- El componente Footer proporciona un pie de página fijo en la parte inferior de la ventana del navegador.
*/
