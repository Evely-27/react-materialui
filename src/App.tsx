import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";

export const  App = () =>  {
  return (
    // conteiner onde vai ser toda a navegação do sistema
    // acha AppRoutes para trazer as rotas, poderia ser criada aqui também
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
  );
}

