import { Route, Routes } from 'react-router';
import { AboutUs } from './AboutUs.jsx';
import { Home } from './Home.jsx';

export const Routing = () => {
    return <>
        <Routes>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
    </>;
};