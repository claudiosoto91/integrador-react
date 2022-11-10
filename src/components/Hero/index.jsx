import styled from "styled-components"

const Hero = () => {
  return (
    <HeroDiv>
        <div className="mask"></div>
        <div className="titulo">
            <h2>Vivero | House of Plants</h2>
            <p>Aprende a plantar tu propio jardín y decorar tu alma, en lugar de esperar a que alguien más te traiga flores</p>
        </div>
    </HeroDiv>
  )
}

export default Hero;

const HeroDiv = styled.div`
    width: 100%;
    height: 40rem;
    background-image: url(./flores-fondo.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .mask{
      content:'';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: .6;
    }
    .titulo{
      width: 70%;
      position: absolute;
      left: 15%;
      top: 10rem;
      color: white;
    }
    @media (min-width: 768px) {
      .titulo{
        top: 15rem;
      }
    }
   
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      margin-top: 2.5rem;
      text-align: center;
      font-size: 1.5rem;
    }
`;