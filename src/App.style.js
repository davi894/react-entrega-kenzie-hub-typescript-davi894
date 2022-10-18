import styled, { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';


const GlobalStyled = createGlobalStyle`

*{
  padding: 0;
}


  button{
    cursor: pointer;
  }

 /*  input{
    border: none;
    color: #F8F9FA;
    &:focus{
                background-color: #343B41;
                outline: none ;
                border-color:#343B41;
                box-shadow: 0 0 5px #F8F9FA;
                } 
  }

  select{
    color: #F8F9FA;
  } */

`

const AppStyled = styled.section`
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;

  background: #121214;

  min-height: 100vh;
`

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
      }
      .Toastify__toast {
      background-color:#343B41; 
      }
      .Toastify__toast-body {
      background-color:#343B41; 
      color: white;
      }
      .Toastify__progress-bar {
      }
`;


export { AppStyled, StyledContainer, GlobalStyled }