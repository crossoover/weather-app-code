import styled,{ keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'

export const FormWrap = styled.div`
     display: flex;
     flex-direction: column;
     height: 100%;
     padding: 25px 20px;
     color: white;
`;

export const UserForm = styled.form`
     bottom: 30px;
     position: absolute;
     background: linear-gradient(131deg, rgba(117,237,244,1) 0%, rgba(83,96,227,1) 79%);
     border-radius: 20px;
     
     @media screen and (max-width: 720px){
     position: relative;
     width: 100%;
     margin-top: 45px;
  }
`;

export const Statistics = styled.div`
     text-align: justify;
     width: 300px;
     animation: 0.5s ${keyframes`${fadeIn}`};
`;

export const Stat = styled.p`
     line-height: 28px;
     display: flex;
     justify-content: space-between;
`;

export const Heading = styled.h2`
     margin-bottom:15px;
     text-align: center;
`;

export const SearchInput = styled.input`
     outline: none;
     color: white;
     padding: 10px 20px;
     border-top-right-radius: 0px;
     border-bottom-right-radius: 0px; 
     border-top-left-radius: 20px;
     border-bottom-left-radius: 20px; 
     background: transparent;
     font-weight: bold;

     &::placeholder{
          color:white;
     }
`;

export const SearchButton = styled.button`
     outline: none;
     color: white;
     padding: 10px 15px;
     cursor: pointer;
     border-top-right-radius: 20px;
     border-bottom-right-radius: 20px; 
     background: transparent;
     font-weight: bold;
     transition: 0.2s;
     
     &:hover{
          color:rgba(34,37,47,255);
     }
`;

export const Error = styled.p`
     width: 290px;
     margin-top: 5px;
     text-align: justify;
     text-align-last: center;
`;
