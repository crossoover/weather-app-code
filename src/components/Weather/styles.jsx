import styled,{ keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'

export const WeatherWrap = styled.div`
     display: flex;
     background: url('https://media.giphy.com/media/6W48irccD1HsA/giphy.gif');
     background-size: cover;
     background-position: center;
     width: 50%;
     height: 400px;
     position: relative;
     border-radius: 20px;
     transform: perspective(1000px) rotateY(15deg);
     padding: 20px;

     @media screen and (max-width: 720px){
          width: 70%;
          margin-top: -30px;
     }
`;

export const Overlay = styled.div`
     background: linear-gradient(131deg, rgba(117,237,244,1) 0%, rgba(83,96,227,0.4096989137451855) 79%);
     z-index: 0;
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     border-radius: 20px;
     
`;

export const WeatherInfo = styled.div`
     z-index: 100;
     color: white;
     font-size: 20px;
     
     animation: 0.5s ${keyframes`${fadeIn}`};
`;

export const Day = styled.p`
     font-weight: bold;
     font-size: 30px;
`;

export const Date = styled.p`
     margin-left: 5px;
`;

export const LocationBlock = styled.div`
     display: flex;
     margin-top: 20px;
`;

export const LocationSVG = styled.svg`
     fill: white;
     width: 20px;
`;

export const WeatherSVG = styled.svg`
     fill: white;
     width: 80px;
     margin-top: 50px;
`;

export const MainTemp = styled.p`
     font-size: 60px;
     font-weight: bold;
`;

export const Description = styled.p`
     margin-top: 5px;
`;
