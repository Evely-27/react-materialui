
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {  useDrawerContext } from '../shared/contexts';
import { 
    Dashboard,
    ListagemDeCidade,
} from '../pages';

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
            },
            {
                icon:'location_city',
                path: '/cidades',
                label: 'CIDADES'
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/init' element={<Dashboard />} />
            <Route path='/cidades' element={<ListagemDeCidade />} />



            <Route path='*' element={<Navigate to="/init" />} />

        </Routes>

    );
};