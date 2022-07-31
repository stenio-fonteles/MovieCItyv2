import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index"
import Details from "../pages/details";
export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact></Route>
            </Routes>
            <Routes>
                <Route path="/details/:id" element={<Details />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}