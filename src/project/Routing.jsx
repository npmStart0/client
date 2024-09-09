import { Route, Routes } from "react-router"
import { Home } from "./Home.jsx"
import { About } from "./About.jsx"
import { Nav } from "./Nav.jsx"

export const Routing = () => {
    return <>
        <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Nav" element={<Nav></Nav>}></Route>
        <Route path="/" element={<About></About>}></Route>
        </Routes>
    </>
}