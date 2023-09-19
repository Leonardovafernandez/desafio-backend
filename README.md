# Desafio Backend

Este é o repositório do backend para o projeto Desafio. O backend é responsável por gerenciar os dados das notas dos alunos.

## Configuração do Banco de Dados

Certifique-se de configurar o banco de dados com as seguintes especificações:

- Banco de Dados: Desafio
- Tabela: Resultado
  - bimestre: Enum ("PRIMEIRO","SEGUNDO","TERCEIRO","QUARTO")
  - disciplina: Enum ("Biologia", "Artes", "Geografia", "Sociologia")
  - nota: Float
  - criadoEm: Date
  - atualizadoEm: Date
  - id: String

## Configuração do Ambiente

Antes de executar o backend, certifique-se de configurar as variáveis de ambiente necessárias, como a conexão com o banco de dados.

```shell
# Exemplo de arquivo .env
DB_HOST=seu-host-do-banco-de-dados
DB_PORT=porta-do-banco
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_NAME=Desafio
```

## Rotas da API

O backend fornece as seguintes rotas da API:

    GET /grades: Lista todas as notas.
    POST /grades: Cria uma nova nota.
    DELETE /grade/:id: Remove uma nota por ID.

## Regras de Notas

    A nota deve estar no intervalo de 0 a 10.
    Apenas uma disciplina por bimestre é permitida.

## Configuração e Execução

    Clone este repositório.
    Configure as variáveis de ambiente em um arquivo .env.
    Execute npm install para instalar as dependências.
    Execute npm start para iniciar o servidor.
