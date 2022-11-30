
import {Routes, Route, Navigate} from 'react-router-dom';
import {useDrawerContext} from '../shared/contexts';
import {useEffect} from 'react';
import { 
    DetalheDePessoas,
    ListagemDePessoas,
    Dashboard,
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
                icon:'people',
                path: '/pessoas',
                label: 'PESSOAS'
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/init' element={<Dashboard />} />
            <Route path='/pessoas' element={<ListagemDePessoas />} />
            <Route path='/pessoas/detalhe/:id' element={<DetalheDePessoas />} />

            <Route path='*' element={<Navigate to="/init" />} />

        </Routes>

    );
};