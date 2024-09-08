import { Route, Routes } from "react-router"
import { Home } from "./Home.jsx"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="Home" element={<Home></Home>}></Route>
        </Routes>
    </>
}