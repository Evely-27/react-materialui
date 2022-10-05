import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

export const  App = () =>  {
  return (
    // esse  ThemeProvider engloba todo o sistema para configurar as cores ao usar o theme.
    /* conteiner onde vai ser toda a navegação do sistema
    acha AppRoutes para trazer as rotas, poderia ser criada aqui também */
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

