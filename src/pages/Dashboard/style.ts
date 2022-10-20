

import styled from "styled-components";

const SectionStyledError = styled.section`

color: white;
min-height: 100vh;
min-width:100vw;

    h3,h2,p{
            margin:0;
        }

    header{

        display:flex;
        align-items:center;
        justify-content:space-around;

        h1{
            color: #FF577F;
        }

        button{

            width: 3rem;
            height: 2rem;

            background: #212529;

            border-radius: 4px;
            border:none;

            cursor: pointer;

            color: white;

            text-decoration: none;
                    
            text-align:center;

            line-height:2rem;         
        }
    }

    div{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        align-items:center;
        height: 5rem;
        justify-content:space-around;

        min-width:100vw;

        gap: 1rem;
       
        p{
            color:#868E96 !important;
        }
    }

    article{
        display:flex;
        flex-direction:column;
        text-align:center;
  
        div{

            button{
                    background: #212529;
                    border-radius: 4px;

                    width: 2rem;
                    height: 2rem;

                    color:#F8F9FA ;

                    font-size:1.5rem;
                    font-weight:900;

                    border:none;

                    cursor: pointer;
                  }

        }

        ul{

            margin: 0 auto;

            display:flex;

            flex-direction:column;

            padding: 1rem;

            background: #212529;
            border-radius: 4px;

            list-style:none;

            width: 55%;

            li{
                display:flex;
                align-items:center;
                justify-content:space-between;

                padding: 1.5rem;

                height: 2rem;

                margin-top:0.7rem;
                background: #121214;
                border-radius: 4px;

                    h2{
                        margin: 0;
                    }

                    div{
                        min-width: 2rem;

                        span{
                            color:#868E96;
                            margin-right:0.5rem;
                        }

                        svg{
                            cursor: pointer;
                        }

                    }
            }
        }
    }
`

export default SectionStyledError