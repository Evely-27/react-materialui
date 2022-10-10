import { Button } from '@mui/material';
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {  useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
    // usar para trocar tema.
    // const {toggleTheme} = useAppThemeContext();
    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon:'home',
                path: '/init',
                label: 'PÁGINA INICIAL'
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/init' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>} 
            />
            <Route path='*' element={<Navigate to="/init" />} />

        </Routes>

    );
};