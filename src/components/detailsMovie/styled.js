import styled from "styled-components";

export const Section = styled.div`
   background: url(${props => props.background});
   width: 100%;
   height: 80vh;
   background-position: center;
   background-size: cover;
   box-shadow: inset -10px -100vh 30px 30px  rgba(0, 0, 0, 0.8);
`
export const Perfil = styled.img`
    width: 500px;
    height: auto;
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius:30px;
` 