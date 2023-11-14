# AVALIADOR DE CÓDIGO ONLINE EM BLOCOS (JOAO)

O projeto descrito neste repositório é se refere ao projeto final de disciplina de Sistemas Distribuídos.

## Organização
Na pasta **backend** contém a API desenvolvida de forma distribuída, enquanto o **front-end** contém a interface com o usuário que se comunica com o backend. 

## Condições iniciais
Copiar os arquivos .env.example para .env, estes arquivos são responsáveis por determinar as variáveis de ambiente do console para a configuração da aplicação.
```sh
    cp ./backend/user-service/.env.example ./backend/user-service/.env 
    cp ./backend/chat-service/.env.example ./backend/chat-service/.env 
    cp ./backend/problems-service/.env.example ./backend/problems-service/.env 
    cp ./backend/mongo-docker/.env.example ./backend/mongo-docker/.env 
```

## Instruçoes
Mais intruções na pasta backend

## Requisitos
### Windows

- [Docker](https://www.docker.com/get-started/)
- [wsl](https://learn.microsoft.com/pt-br/windows/wsl/install)
- [Node v16](https://nodejs.org/en/blog/release/v16.16.0)
   
### Linux
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Node v16](https://nodejs.org/en/blog/release/v16.16.0)

### Rodar Backend
Sigas as instruções do ReadME na Pasta backend para gerar as chaves privadas e publicas de criptografia e depois será Necessário rodar duas vezes a aplicação com o comando:
```sh
docker compose up --build


## Rodar Front-end
Primeiro instale as dependencias
```sh
npm i
```
em seguida rode o comando:
```
npm run dev
```
## Arquitetura

![image](https://github.com/yureduarte-20/trabalho-sistemas-distribuidos/assets/60445477/0a9b8721-41b3-4ef4-8bc1-b864a4a79a99)
