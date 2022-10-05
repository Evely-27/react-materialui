import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider } from './shared/contexts';

/* esse  ThemeProvider engloba todo o sistema para configurar as cores ao usar o theme.
 conteiner onde vai ser toda a navegação do sistema
acha AppRoutes para trazer as rotas, poderia ser criada aqui também */
export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <MenuLateral>
                    <AppRoutes/>
                </MenuLateral>
            </BrowserRouter>
        </AppThemeProvider>

    );
};

