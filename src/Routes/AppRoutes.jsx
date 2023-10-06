
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Search from "../Pages/Search";

export default function AppRoutes()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pesquisa/:nome" element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}