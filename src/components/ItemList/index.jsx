import styled from 'styled-components';
import Item from './../Item/index';
import { useParams } from 'react-router-dom';

const ItemList = ({data=[]}) => {
  const categoriaId = useParams();
  console.log(categoriaId.categoriaId);

  return (
    <Contenedor className='contenedor'>
       <h2>
      {
        categoriaId.categoriaId === 'mas-vendidos' ? 'Conoce los productos más demandados' :  categoriaId.categoriaId === 'nuevo-ingreso' ? 'Lo nuevito que acaba de llegar' : 'Todos nuestros productos'
      }
      </h2>
      <GridCard>
        {
          data.map(planta => <Item key={planta.id} info={planta} />)
        }
      </GridCard>
    </Contenedor>

  )
}

export default ItemList;

const Contenedor = styled.div`
  background-color: #202C34;
  max-width: 1440px;
  padding: 3rem 0 5rem 0;
  h2{
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    font-size: 2rem;
    font-weight: 900;
  }

`;

const GridCard = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

@media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
@media (min-width: 1280px) {
   grid-template-columns: repeat(3, 1fr);
 }


`;