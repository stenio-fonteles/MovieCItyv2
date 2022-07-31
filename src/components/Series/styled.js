import styled from "styled-components";

export const Space = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right:10% ;
    align-items: center;
    margin-top: 2%;
    `
   export const Button = styled.button`
        padding: 10px 30px;
        background:red;
        color: wheat;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
            background-color: orange;
            color: black;

        }
    `
export const Title = styled.h1`
    margin-left: 10%;
`
export const Section = styled.div`
    ${(props) => props.display};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    flex-direction: row;
    width: 80%;
    gap: 2%;
    margin-left:10%;
    margin-top: 2%;
    overflow-y: scroll;
    border-radius:10px;
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