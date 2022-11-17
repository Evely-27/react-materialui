# Curso de react - Lucas Souza

Este repositório é para o desenvolvimento das práticas de Front-End do Curso de React com Material UI feito pelo YouTube patrocinado pelo desenvolvedor Lucas Souza.

## Principais conceitos abordados:
 
* ReactJS com Typescript,
* CRUD  de pessoas e cidades,
* Componentes e páginas,
* Navegação dentre rotas,
* useEffect e useState,
* Listas,
* Service de acesso ao backend,
* Uso de API.

## Tecnologias usadas: 

* [ReacrJS](https://reactjs.org/docs/getting-started.html)
* [NodeJS](https://nodejs.org/en/download/) 
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Material Ui](https://mui.com/pt/material-ui/getting-started/installation/)
* [Json-Server](https://www.npmjs.com/package/json-server)

### Criar projeto ReactJS com Typescript

* Em uma pasta para o projeto, rodar: npx create-react-app nomeprojeto --template typescript
* No novo arquivo criado, rodar: npm start 

## Comandos usados no curso:
* npm install react-router-dom = serve para trabalhar navegação entre páginas.
* npm instal add -D @types/react-router-dom = instala o types que serve para tipagem
* npm install react-router-dom@6 = instala o react roputer dom para fazer a navegação pelo sistema
* npm install @mui/material @emotion/react @emotion/styled =  comando para instalar o mui material
* npm install @mui/icons-material = para trabalhar com os ícones dpo material UI
* npm init @eslint/config =  para instalr o eslint para padronização de código
* npm install -g json-server = serve para instalar o json-server
## Anotações do desenvolvemnto:
* O uso do "refactor" no git é para "refatoração" já que somente organizamos e limpamos o código.
* Vamos usar o JsonServer para simular APIs, instalamos ele como uma dependencia de desenvolviemnto para ser instalado logo no inicio e não vai para producação também.
* pasta mock é para informações que vamos tratar como json-server.
* Para rodar o json -server foi necessario usar o comando <npx json-server -w -p 3333 .\mock\database.json> já que estamos usando o pacote npm.


[Link da playlist do curso no YouTube](https://youtube.com/playlist?list=PL29TaWXah3iaqOejItvW--TaFr9NcruyQ)

Instrutor : Lucas Souza