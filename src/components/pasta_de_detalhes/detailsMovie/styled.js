import styled from "styled-components";

export const Section = styled.div`
   background: url(${props => props.background});
   width: 100%;
   height: 80vh;
   background-position: center;
   background-size: cover;
   box-shadow: inset -10px -100vh 30px 30px  rgba(0, 0, 0, 0.8);
   align-items: center;
   text-align: center;
  
`
export const Perfil = styled.img`
    width: 500px;
    height: auto;
    margin-top: 50px;
    border-radius:30px;
` 
export const Genres = styled.div`
    //display: flex;
    

`

export const Button = styled.button`
    padding: 10px 30px;
    color: white;
    background-color: red;
    border: none;
    outline: none;
    margin-right: 5px;
    &:hover{
        background-color: orange;
        color: black;

    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;
    align-items: center;
    justify-items: center;
    margin-top: 5%;
    img{
        width: 300px;
        border-radius: 20px;
    }

`