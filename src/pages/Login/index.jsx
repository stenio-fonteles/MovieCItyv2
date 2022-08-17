import axios from "axios"
import { useState } from "react"
import { Form } from "./styled"
export default function Login() {
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
   function teste(){
        axios.post('http://localhost:3000/Login',
        {
            Name: user,
            PassWord:password 
        })
   } 

    return(
        <Form>
            <label for="nome">Nome:</label>
            <input type={'text'} id="nome" onChange={(e)=>{setUser(e.target.value)}} />
            <label for="nome">Password:</label>
            <input type={"password"} onChange={(e) =>{ setPassword(e.target.value)}}/>
            <button onClick={()=>{teste()}}> Salvar </button>
        </Form>
    )

}