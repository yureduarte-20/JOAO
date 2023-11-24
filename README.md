# AVALIADOR DE CÓDIGO ONLINE EM BLOCOS (JOAO)

O projeto descrito neste repositório é se refere ao projeto final de disciplina de Sistemas Distribuídos.

## Organização
Na pasta **backend** contém a API desenvolvida de forma distribuída, enquanto o **front-end** contém a interface com o usuário que se comunica com o backend. 

## Condições iniciais
Copiar os arquivos .env.example para .env, estes arquivos são responsáveis por determinar as variáveis de ambiente do console para a configuração da aplicação.
```sh
    cp ./backend/user-service/.env.example ./backend/user-service/.env \
    cp ./backend/chat-service/.env.example ./backend/chat-service/.env \
    cp ./backend/problems-service/.env.example ./backend/problems-service/.env \
    cp ./backend/mongo-docker/.env.example ./backend/mongo-docker/.env 
```

## Instruçoes
Mais intruções na pasta backend

## Pré requisitos
### Windows

- [Docker](https://www.docker.com/get-started/)
- [wsl](https://learn.microsoft.com/pt-br/windows/wsl/install)
- [Node v16](https://nodejs.org/en/blog/release/v16.16.0)
   
### Linux
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Node v16](https://nodejs.org/en/blog/release/v16.16.0)

### Rodar Backend
Com o docker devidamente instalado, rode o comando abaixo na pasta /backend

```sh
docker compose up --build
```

## Rodar Front-end
Na pasta /frontend, com o node devidamente instalado [versão 16](https://nodejs.org/en/blog/release/v16.16.0) rode o comando no terminal abaixo para instalar as dependências de projeto:
```sh
npm install
```
em seguida rode o comando:
```
npm run dev
```

Posteriormente abra uma aba em seu navegador de preferência no endereço [http://localhost:3000](http://localhost:3000), as especificações do OpenAPI está na  [http://localhost:3005](http://localhost:3005)
## Arquitetura

![image](https://github.com/yureduarte-20/trabalho-sistemas-distribuidos/assets/60445477/0a9b8721-41b3-4ef4-8bc1-b864a4a79a99)
