import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index"
import Details from "../pages/details";
import Login from "../pages/Login";
export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact></Route>
            </Routes>
            <Routes>
                <Route path="/details/:id" element={<Details />} ></Route>
            </Routes>
            <Routes>
                <Route path="/Login" element={<Login />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}