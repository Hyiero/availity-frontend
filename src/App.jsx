import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/layout/Nav';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import './styles.css';

function App() {
    return (
        <div>
        <CssBaseline />
        <Nav />
        <Routes>
            {
                routes.map((route) => (
                    <Route 
                        key={route.name}
                        path={route.path}
                        element={<route.element />}>
                    </Route>
                ))
            }
        </Routes>
        </div>
    );
}

export default App;