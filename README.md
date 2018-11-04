# Organize

Projeto realizado com ReactJS e Laravel 5.7.

Primeiro você tem que usar o seu Terminal para chegar ao diretório que você deseja armazenar o projeto.

Então você executa:

```
git clone git@github.com:rafaelzorn/organize.git
```

## Instalação API

Acesse o diretório criado e você estará no diretório-raiz do projeto, então acesse organize-api:

```
cd organize/organize-api
```

Instalar as dependências do projeto:

```
composer install
```

Configure o .env

```
cp .env.example .env para configurar a instalação
```

Gere a chave unica

```
php artisan key:generate
```

Execute as migrations

```
php artisan migrate
```

Execute as seeders

```
php artisan db:seed
```

## Instalação Client

Acesse o diretório criado e você estará no diretório-raiz do projeto, então acesse organize:

```
cd organize/organize
```

Instalar as dependências do projeto:

```
yarn
```

Por fim, execute o servidor de desenvolvimento, o aplicativo deve estar disponível na seguinte URL: http://localhost:3000

```
yarn start
```

## OBS

Dados para acessar o dashboard:

E-mail: admin@admin.com.br··
Senha: 123456

## Screenshots

![Screenshot 1](https://image.ibb.co/h18foL/login.png)
![Screenshot 2](https://image.ibb.co/j53Khf/dashboard.png)

## Construído com

### API

-   [Laravel 5.7](https://laravel.com)

### CLIENT

-   [React](https://reactjs.org)
-   [Axios](https://github.com/axios/axios)
-   [Redux Saga](https://redux-saga.js.org)
-   [Redux](https://redux.js.org)
-   [REACT ROUTER](https://reacttraining.com/react-router/web/guides/philosophy)
-   [Bootstrap](https://getbootstrap.com)
-   [Styled Components](https://www.styled-components.com)
