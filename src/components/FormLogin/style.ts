import styled from "styled-components";


const FormStyledLogin = styled.form`

width: 320px;
background: #212529;
display:flex;
flex-direction:column;

padding: 1rem;

gap: 1rem;

@media (min-width: 320px) {
    width: 234px;
}

@media (min-width: 260px) {
          width: 200px;
}

@media (min-width: 425px) {
             width:  320px;
}

    input{
    background-color: #343B41;
    border: 1.2182px solid #343B41;
    border-radius: 4px;
    color: #F8F9FA;

    padding: 0.5rem;
        &:focus{
                background-color: #343B41;
                outline: none ;
                border-color:#343B41;
                box-shadow: 0 0 5px #F8F9FA;
                } 
    }

    p{
        color:red;
    }

    h2{
        color: #F8F9FA;
        text-align:center;
    }

    div{
        display:flex;
        flex-direction:column;
        text-align:center;
       
        gap: 1rem;

        a{
           height: 48px;

           text-decoration:none;

           
                div{
                    background: #868E96;
                    border: 1.2182px solid #868E96;
                    border-radius: 4px;

                    color: #F8F9FA;

                    height: 100%;
                    width: 100%;

                    line-height:2.75rem;
                   }
        }
       
    }

    label{
        color:#F8F9FA;
    }

    span{
        color:#868E96;
    }

    button{

        width: 326px;
        height: 48px;


        cursor: pointer;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        color:#F8F9FA;

          @media (min-width: 320px) {
             width: 234px;
            }

          @media (min-width: 260px) {
            width: 200px;
           }

          @media (min-width: 425px) {
            width:  320px;
            }
    }
`

const SectionStyledLogin = styled.section`

display: flex;
justify-content: center;
flex-direction:column;
align-items: center;

min-height: 90vh;

    h1{
        color: #FF577F;
        text-align:center;
    }

`

export { FormStyledLogin, SectionStyledLogin } 