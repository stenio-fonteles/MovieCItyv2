import styled from "styled-components";

export const Iframe = styled.iframe`
    width: 100%;
    height: 100vh;
    display: ${props=>props.display};
`

export const Section = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 1%;
    button{
        padding: 20px 50px;
        color: wheat;
        background-color: red;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover{
            color: black;
            background-color: orange;
        }
    }
`