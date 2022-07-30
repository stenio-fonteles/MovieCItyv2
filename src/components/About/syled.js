import styled from "styled-components";

export const Section = styled.div`
    width:auto;
    height: 80vh;
    background: url(${props => props.background});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset -10px -100vh 30px 30px  rgba(0, 0, 0, 0.8);
    div{
        display: flex;
        
        h1{
            font-weight: bold;
            font-size: 3rem;
            width: 650px;
            white-space: nowrap;
        }
        div{
          
        display: flex;
        flex-direction: row;
        margin-left: 10%;
        margin-top: 10%;
        img{
            width:300px;
            height: 400px;
            border-radius: 10%;
            margin-right: 5%;
            z-index: 99;
            
        }
        div{
            display: flex;
            flex-direction: column;
            width: 300px;
           
            div{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                margin-left: 0;
                p{
                    border: 1px solid white;
                    padding:8px 30px ;
                    border-radius: 20px;
                    white-space: nowrap;
                    margin-right: 5%;
                }
            }
        }
    }
    }
   
`

export const Info = styled.h3`
    margin-top: 5%;
    color: white;
    overflow-y: scroll; 
    padding: 10px;
    color:white;
    width:500px;
    height: 70px;
    overflow-y: scroll;
    font-size: 1.2rem;
    &::-webkit-scrollbar {
      width: 12px;              
    }

    &::-webkit-scrollbar-track {
      background: transparent;        
    }

    &::-webkit-scrollbar-thumb {
      background-color: red;    
      border-radius: 20px;       
      border: 1px solid orange;  
    }

`
export const Button = styled.button`
    padding: 10px;
    background-color: red;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 20px;
    
`