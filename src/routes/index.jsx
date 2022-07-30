import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index"
export default function Rotas() {
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}