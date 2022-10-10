
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Dashboard } from '../pages';
import {  useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
    // usar para trocar tema.
    // const {toggleTheme} = useAppThemeContext();
    const { setDrawerOptions} = useDrawerContext();

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
            <Route path='/init' element={<Dashboard />} />
            <Route path='*' element={<Navigate to="/init" />} />

        </Routes>

    );
};