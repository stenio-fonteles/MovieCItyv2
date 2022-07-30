import styled from 'styled-components';

export const Section = styled.div`
    height: 5%;
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    position: fixed;
   
    h2{
        margin-left: 2%;
        margin-top: 3%;
       
    }
    ul{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        width: 30%;
        margin-top: 3%;
      
        p{
            cursor: pointer;
        }
    }
`
