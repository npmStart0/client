import { Route, Routes } from 'react-router';
import { AboutUs } from './AboutUs.jsx';

export const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<AboutUs></AboutUs>}></Route>
        </Routes>
    </>;
};