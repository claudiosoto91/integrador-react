import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Contenedor>
        <DivFooter>
            <div className="redes">
                <div><BsFacebook/></div>
                <div><BsInstagram/></div>
                <div><BsWhatsapp/></div>
                <div><BsYoutube/></div>
            </div>
            <div className="contacto">
                <div className="logo-footer">
                    <NavLink to='/'>
                        <img src="./logo-vivero-2.png" alt="logo-footer" />
                    </NavLink>
                </div>
                <div className="info-contacto">
                    <h3>Contacto</h3>
                    <p>Consulta todo lo que necesites</p>
                    <p>Cel.: 444- 1234 567</p>
                </div>
            </div>
            <div className="copy">Todos los Derechos Reservados | House of Plants | 2022</div>
        </DivFooter>
    </Contenedor>

  )
}

export default Footer;

const Contenedor = styled.div`
width: 100%;
background-color: #000D0A;
`;
const DivFooter = styled.div`
    .redes {
        margin: 0 auto;
        padding-top: 2.5rem;
        width: 50%;
        display: flex;
        justify-content: space-around;
        bord
        div svg{
            color: white;
            font-size: 2rem;
            transform: scale;
            transition: .5s;
        }
        div svg:hover{
            scale: 1.2;
            color: green;
        }
    }
    .contacto{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .logo-footer{
            width: 100%;

            img{
                display: block;
                max-width: 250px;
                margin: 0 auto;
            }
        }
        @media (min-width: 768px) {
            .logo-footer{
                width: 50%;
            }
        }
        .info-contacto{
            color: white;
            text-align: center;
            padding-bottom: 2rem;

        }
        @media (min-width: 768px) {
            .info-contacto{
                width: 50%;
                h3{
                    font-size: 2rem;
                }
                p{
                    font-size: 1.3rem;
                }
            }
        }
    }
    .copy{
        text-align: center;
        color: white;
        font-size: .9rem;
        padding-bottom: 1rem;
    }
    @media (min-width: 768px) {
        .copy{
            font-size: 1.1rem;
        }
    }

`;