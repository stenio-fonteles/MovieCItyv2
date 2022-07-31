import styled from "styled-components";

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    margin-top: 5%;
    background-color: 	rgb(220,220,220, 0.1);
    
    div{
        width: 300px;
        img{
            width: 50px;
            height: auto;
            margin-right: 5%;
            cursor: pointer;
        }
    }
`