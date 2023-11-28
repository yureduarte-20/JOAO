# AVALIADOR DE CÓDIGO ONLINE EM BLOCOS (JOAO)

A plataforma JOAO é uma ferramenta de apoio ao ensino e aprendizagem de programação para pessoas que precisam aprender lógica de programação. Baseada em blocos, a ferramenta possui uma abordagem que torna a programação mais intuitiva e acessível para esse público.
A plataforma oferece uma variedade de recursos para ajudar os usuários a aprender programação, incluindo um editor de blocos intuitivo, um sistema de feedback e um conjunto de atividades e desafios. Além disso, a plataforma visa tornar a programação mais acessível e intuitiva para crianças e adolescentes, oferecendo um ambiente de aprendizagem envolvente e motivador.

## Arquitetura

![image](https://github.com/yureduarte-20/trabalho-sistemas-distribuidos/assets/60445477/0a9b8721-41b3-4ef4-8bc1-b864a4a79a99)
## Diagrama de componentes
![Diagrama de Componentes](https://github.com/yureduarte-20/JOAO/assets/60445477/70a1731d-78ff-4048-9d35-796011f6106f)

## Organização das pastas 
Na pasta **backend** contém a API desenvolvida de forma distribuída, enquanto o **front-end** contém a interface com o usuário que se comunica com o backend. 

## Pré requisitos funcionais
Copiar os arquivos .env.example para .env, estes arquivos são responsáveis por determinar as variáveis de ambiente do console para a configuração da aplicação.
```sh
    cp ./backend/user-service/.env.example ./backend/user-service/.env \
    cp ./backend/chat-service/.env.example ./backend/chat-service/.env \
    cp ./backend/problems-service/.env.example ./backend/problems-service/.env \
    cp ./backend/mongo-docker/.env.example ./backend/mongo-docker/.env 
```

## Pré requisitos de software
### Windows

- [Docker](https://www.docker.com/get-started/)
- [wsl](https://learn.microsoft.com/pt-br/windows/wsl/install)
- [Node v16](https://nodejs.org/en/blog/release/v16.16.0)
   
### Linux
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Node v16](https://nodejs.org/en/blog/release/v16.16.0)

## Técnologias usadas
- Node
- Dokcer
- ReactJS

### Rodar a aplicação
Com o docker devidamente instalado, rode o comando abaixo na raiz do projeto

```sh
docker compose up --build
```

Posteriormente abra uma aba em seu navegador de preferência no endereço [http://localhost:3000](http://localhost:3000), as especificações do OpenAPI está na  [http://localhost:3005](http://localhost:3005)


