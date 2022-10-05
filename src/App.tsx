import {ThemeProvider} from '@mui/material';
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { LightTheme } from './shared/themes';

export const  App = () =>  {
  return (
    // esse  ThemeProvider engloba todo o sistema para configurar as cores ao usar o theme.
    <ThemeProvider theme={LightTheme}>

    {/* conteiner onde vai ser toda a navegação do sistema
    acha AppRoutes para trazer as rotas, poderia ser criada aqui também */}
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

