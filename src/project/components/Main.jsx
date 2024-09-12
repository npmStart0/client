import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing';
import { Nav } from './Nav';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export function Main() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    );
}