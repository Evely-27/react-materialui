import { Button } from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
    const {toggleTheme} = useAppThemeContext();

    return (
        <Routes>
            {/* rota para /init mostarnto um <p> com mensagem 
            contained = preencher tudo
            */}
            <Route path='/init' element={<Button variant='contained' color='primary'onClick={toggleTheme}>Mudar tema</Button>} />

            {/* path * = vai vir paar cá qualquer rota que não foi configurada anteriormente */}
            <Route path='*' element={<Navigate to="/init" />} />


        </Routes>

    );
}