import styled from "styled-components";

const FormStyledCadastro = styled.form`

width: 320px;
background: #212529;

@media (min-width: 320px) {
    width: 234px;
}

@media (min-width: 260px) {
          width: 200px;
        }

@media (min-width: 425px) {
            width:  320px;
            }


display: flex;
flex-direction: column;

padding: 1rem;

gap: 1rem;

margin-bottom: 1rem;

    input,select{
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
    }

    div{
        justify-content:center;
        display: flex;
        flex-direction:column;
        align-items:center;
    }

    label{
        color:#F8F9FA;
    }

    span{
        color:#868E96;
    }

`
const SectionStyledCadastro = styled.section`

max-width:100%;
max-height:100%;

    h1{
        color: #FF577F;
    }

    div{
        display: flex;
        justify-content:space-between;
        align-items:center;

       

        a{
            color:#F8F9FA;

            text-decoration: none;
                div{
                    padding: 0.5rem;

                    background: #212529;
                    border-radius: 4px;
                    border:none;

                    text-align:center;

                    height: 2rem;
                }
        }
            
        }

    button{
        background: #212529;
        color:#F8F9FA;
        cursor: pointer;

        height:2rem ;

        width: 300px;
        height: 48px;

        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;

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

export { FormStyledCadastro, SectionStyledCadastro }