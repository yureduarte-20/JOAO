# AVALIADOR DE CÓDIGO ONLINE EM BLOCOS (JOAO)

O projeto descrito neste repositório é se refere ao projeto final de disciplina de Sistemas Distribuídos.

## Organização
Na pasta **backend** contém a API desenvolvida de forma distribuída, enquanto o **front-end** contém a interface com o usuário que se comunica com o backend. 

## Condições iniciais
Rodar para configurar as variáveis de ambiente (linux)
```sh
    cp ./backend/user-service/.env.example ./backend/user-service/.env 
    cp ./backend/chat-service/.env.example ./backend/chat-service/.env 
    cp ./backend/problems-service/.env.example ./backend/problems-service/.env 
    cp ./backend/mongo-docker/.env.example ./backend/mongo-docker/.env 
```

## Instruçoes
Mais intruções na pasta backend

### Rodar Backend
é Necessário rodar duas vezes a aplicação com o comando:
```sh
docker compose up --build
```
A primeira para configurar o mongo, a segunda para rodar a aplicação.
Na primeira tentativa, quando os logs pararem de aparecer pressione `CTRL + C` e novamente rode o comando:
```sh
docker compose up --build
```
#Arquitetura
![image](https://github.com/yureduarte-20/trabalho-sistemas-distribuidos/assets/60445477/0a9b8721-41b3-4ef4-8bc1-b864a4a79a99)
