import styled from "styled-components";

export const SectionModalStyled = styled.section`

position: fixed;

background: rgba(18, 18, 20, 0.5);

min-height: 100vh;
min-width: 100vw;
max-width:100vw;
z-index: 100;

top:0;

 article{

    position: fixed;

    right:35%;

    top:20%;

    @media (max-width: 697px) {
        right: 19%;
    }
   
    @media (max-width: 498px) {
        right:2%;
    }

    @media (max-width: 412px) {
        right:20%;
         }

    @media (max-width: 362px) {
        right:14%;
    }

        div{
        padding: 0.5rem;

        justify-content:space-between;

        display:flex;

        height: 3rem;
        min-width: 0vw;
        gap: 1rem;
            
        background: #343B41;
        border-radius: 4px 4px 0px 0px;

        @media (max-width: 320px) {
          width: 200px;
         }

         @media (max-width: 412px) {
            width: 200px;
         }


        h2,button{

            font-size:14px;
        }

        button{
            background-color:transparent;
            color: #868E96;
        }

        }

        form{

            @media (max-width: 320px) {
                width: 184px;
            }

            @media (max-width: 412px) {
            width: 184px;
            }

            label{
                text-align:left;
            }

            width: 369px;
            height: 250px;

            gap: 1rem;
            padding: 1rem;

            background: #212529;
            box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
            border-radius: 4px;

            display: flex;

            flex-direction:column;

            p{
                color:red;
             }

            input,select{
                        background: #343B41;
    
                        height: 2.4rem;
    
                        border: 1.2182px solid #F8F9FA;
                        border-radius: 4px;

                        color:#F8F9FA;
    
                        padding: 0px 22.3336px;
                        gap: 10.15px;
                 }
            select{
                    color:#F8F9FA ;
                  }

            button{
                background: #FF577F;
                border: 1.2182px solid #FF577F;
                border-radius: 4.06066px;
                color:#F8F9FA;
                height: 3rem;
                padding: 0px 22.3336px;
                gap: 10.15px;
                }
        }
 }
`

