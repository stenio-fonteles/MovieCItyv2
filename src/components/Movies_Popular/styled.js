import styled from "styled-components";

export const Title = styled.h1`
    margin-left: 10%;
    margin-top: 2%;
`
export const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    gap: 2%;
    margin-left:10%;
    margin-top: 2%;
    overflow-y: scroll;
    box-shadow: inset -100px 0vh 10px 10px  rgba(0, 0, 0, 0.8);
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