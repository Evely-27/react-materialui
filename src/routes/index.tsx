import {Routes, Route, Navigate} from 'react-router-dom';

export const AppRoutes = () => {

    return (
        <Routes>
            {/* rota para /init mostarnto um <p> com mensagem */}
            <Route path='/init' element={<p>Página Inicial</p>} />

            {/* path * = vai vir paar cá qualquer rota que não foi configurada anteriormente */}
            <Route path='*' element={<Navigate to="/init" />} />


        </Routes>

    );
}