# donate_dine
API para classificação de imagens e gestão de lotes e estoques

## Lote

### Criar novo lote
Cria um novo lote de produtos.

- Método: POST
- URL: `/api/lote`
- Corpo da requisição:

```
{
  "quantidade": 10,
  "unidade_medida": "KILOGRAMA",
  "descricao": "frutas diversas",
  "fornecedor": "FIAP"
}
```

### Recuperar Lote
Recupera as informações de um lote pelo seu ID.

- Método: GET
- URL: `/api/lote/{id}`

### Recuperar Lotes por Quantidade
Recupera uma lista de lotes com a quantidade especificada.

- Método: GET
- URL: `/api/lote/quantidade/{quantidade}`

### Recuperar por Unidade de medida
Recupera uma lista de lotes pela unidade de medida.

- Método: GET
- URL: `/api/lote/unidademedida/{unidademedida}`

### Recuperar Lotes por Fornecedor
Recupera uma lista de lotes pelo fornecedor.

- Método: GET
- URL: `/api/lote/fornecedor/{fornecedor}`

### Recuperar Lotes a partir da Data de Criação
Recupera uma lista de lotes criados a partir de uma determinada data.

- Método: GET
- URL: `/api/lote/datacriacao/{datacriacao}`


## Estoque

### Criar novo Estoque

- Método: POST
- URL: `/api/estoque`
- Corpo da requisição:

```
{
    "id_lote": "valor_do_idLote"
}
```

### Recuperar Estoque
Recupera as informações de um estoque pelo seu ID.

- Método: GET
- `/api/estoque/{id}`

## Usuário

### Cadastrar Usuário
Cadastra um novo usuário.

- Método: GET
- URL: `/api/usuario/cadastrar`
- Corpo da requisição:

```
{
    "nome": "Thiago",
    "email": "rm92900@fiap.com.br",
    "senha": "Senha123"
}
```

### Atualizar Usuário
Atualiza as informações de um usuário pelo seu ID.

- Método: PUT
- URL: `/api/usuario/{id}`
- Corpo da requisição: 

```
{
    "nome": "Thiago Matos",
    "email": "rm92900@fiap.com.br",
    "senha": "Senha123"
}
```

### Realizar Login
Realiza o login de um usuário.

- Método: POST
- URL: `/api/usuario/{login}`
- Corpo da requisição: 

```
{
    "email": "postman@postman.com",
    "senha": "Senha123"
}
```

## Item

### Criar novo Item
Cria um novo item no estoque especificado.

- Método: POST
- URL: `/api/estoque/:idEstoque/{item}`
- Corpo da requisição:

```
  {
    "nome": "banana",
    "path_imagem": "C:\\Users\\thdev\\Documentos\\Fiap\\GLOBALSOLUTION1\\AI\\Classificacao\\Img1.png",
    "classificacao": "Boa"
  }
  ```