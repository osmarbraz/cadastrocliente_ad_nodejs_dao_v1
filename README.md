# Programa servidor API-REST do CRUD de Cliente utilizando Node.js e SQLite com DAO para atividade a distância.

## Descrição

- O projeto foi desenvolvido no VSCodde deve ser chamado "cadastrocliente_ad_nodejs_v1".
- Programa cliente está no projeto "cadastrocliente_ad_reactjs_v1".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- Os dados de configuração da integração com o banco de dados estão no arquivo "src/dbconfig.js".
- A tabela cliente possui os campos clienteId, nome e cpf.

## Dependências

- express,
- cors,
- sqlite3.

## Execução

   <pre><code>npm start</code></pre>

## Atualização

Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.

   <pre><code>npm update</code></pre>   

## Arquivos em src

- index.js - Programa principal com o servidor Express.
- clientedao.js - Classe de acesso aos objetos de dados(DAO) do banco de dados.
- dao.js - Classe de interação com o banco de dados.
- clienterecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
- dbconfig.js - Contêm as configurações e conexão com o banco de dados.
- servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.

## Serviços

- Serviço que retorna via GET a lista de cliente.<br>
    http://localhost:8000/clientes

- Serviço que retorna via GET um cliente.<br>
    substitua \<ID\> por um id de um cliente.<br>
    http://localhost:8000/cliente/<ID\>

- Serviço que insere via POST um cliente.<br>
    http://localhost:8000/cliente<br>
    Enviar um JSON com os campos clienteId, nome, cpf, telefone, dataNascimento, estadoNascimento e estadoCivil.
    Content-Type: application/json -d {"clienteId":"1", "nome":"Pedro","cpf":"45678912399","telefone":"48991234321","dataNascimento":"2021-01-01","estadoNascimento":"1","estadoCivil":"1"}

- Serviço que atualiza via PUT um cliente.<br>
    http://localhost:8000/cliente<br>
    Enviar um JSON com os campos clienteId, nome, cpf, telefone, dataNascimento, estadoNascimento e estadoCivil.
    Content-Type: application/json -d {"clienteId":"1", "nome":"Pedro","cpf":"45678912399","telefone":"48991234321","dataNascimento":"2021-01-01","estadoNascimento":"1","estadoCivil":"1"}    
    
- Serviço que exclui via DELETE um cliente.<br>
    Substitua \<ID\> por um id de um cliente.<br>
    http://localhost:8000/cliente/<ID\>
