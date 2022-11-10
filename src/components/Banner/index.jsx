import styled from  'styled-components';

const Banner = () => {
  return (
    <Contenedor>
        <DivInfo>
            
            <div>
                <p>Tenemos para brindarte lo mejor en Plantas</p>
            </div>
            <div>
                <p>Acercate a cualquiera de nuestros viveros</p>
            </div>
            <div>
                <p>Consulta por nuestros Cursos disponibles</p>
            </div>
            
        </DivInfo>
    </Contenedor>
  )
}

export default Banner;

const Contenedor = styled.div`
    width: 100%;
    background-color: #9800A5;

`;
const DivInfo = styled.div`
    color: white;   
    font-size: 1.5rem;
    font-weight: 700;
    padding: 2rem 0;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`;