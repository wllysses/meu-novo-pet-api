
## Documentação da API

#### URl BASE
- https://api-meunovopet.onrender.com

### Usuários

#### Cadastra um novo usuário

```http
  POST /api/v1/usuarios
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome *`      | `string` | **Obrigatório**. O nome do usuário
| `email *`      | `string` | **Obrigatório**. O e-mail do usuário
| `telefone *`      | `string` | **Obrigatório**. O telefone do usuário
| `cidade/estado *`      | `string` | **Obrigatório**. Cidade/estado do usuário
| `senha *`      | `string` | **Obrigatório**. A senha do usuário
| `confirmar_senha *`      | `string` | **Obrigatório**. A confirmação de senha do usuário

* *Parâmetros passados no body da requisição HTTP

#### Autenticação de usuário

```http
  POST /api/v1/auth
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email *`      | `string` | **Obrigatório**. O e-mail do usuário
| `senha *`      | `string` | **Obrigatório**. A senha do usuário

* *Parâmetros passados no body da requisição HTTP


### Pets

#### Retorna todos os pets

```http
  GET /api/v1/pets
```

#### Retorna um pet

```http
  GET /api/v1/pets/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pet desejado |

#### Cadastra um novo pet

```http
  POST /api/v1/pets
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `usuario_id **`      | `string` | **Obrigatório**. O ID do usuário
| `nome *`      | `string` | **Obrigatório**. O nome do pet
| `raca *`      | `string` | **Obrigatório**. A raça do pet
| `tipo *`      | `string` | **Obrigatório**. O tipo do pet
| `idade *`      | `string` | **Obrigatório**. A idade do pet
| `porte *`      | `string` | **Obrigatório**. O porte do pet
| `sexo *`      | `string` | **Obrigatório**. O Sexo do pet
| `imagem *`      | `string` | **Obrigatório**. A imagem do pet

* *Parâmetros passados no body da requisição HTTP

#### Atualiza se o pet está disponível para adoção

```http
  PUT /api/v1/disponivel/pets/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pet
| `disponivel *`      | `boolean` | **Obrigatório**. A disponibilidade do pet

* *Parâmetros passados no body da requisição HTTP

#### Remove um pet cadastrado

```http
  DELETE /api/v1/pets/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pet
