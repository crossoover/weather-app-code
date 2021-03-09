import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    border: none;
  }
  body {
    background: #353d4d;
    overflow: hidden;
  }
  @media screen and (max-width: 720px){
    body{
     overflow: scroll;
    }
  }
`
export const Wrapper = styled.div`
     display: flex;
     align-items: center;
     background-color: rgba(34,37,47,255);
     border-radius: 20px;
     width: 700px;
     height: 350px;
     position: relative;
     margin: 200px auto;

  @media screen and (max-width: 720px){
    margin-top: 60px;
    flex-direction: column;
    width: 350px;
    height: 720px;
  }
`;
