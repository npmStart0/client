import { Route, Routes } from "react-router"
import { Home } from "./Home.jsx"
import { AboutUs } from "./AboutUs.jsx"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/" element={<AboutUs></AboutUs>}></Route>
        </Routes>
    </>
}