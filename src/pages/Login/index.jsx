import axios from "axios"

export default function Login() {
   function teste(){
        axios.post('http://localhost:3000/Login',
        {
            Name: 'Fred',
            PassWord: 'Flintstone'
        })
   } 
   teste()
    return(
        <>
            <input alt="Nome" placeholder="nome"> Nome </input>
            <input> Password</input>
            oi
        </>
    )

}