/**
 * Classe de acesso a dados de clientes.
 */

// Import das bibliotecas
const DAO = require("./dao");

// Define a classe ClienteDAO 
class ClienteDAO extends DAO {

    /**
     * Retorna uma lista com todos os clientes.
     * 
     * @returns uma lista.
     */
    getLista() {
        const sql = "SELECT clienteId, nome, cpf, telefone, STRFTIME('%d/%m/%Y', dataNascimento) as dataNascimento, estadoNascimento, estadoCivil FROM clientead ORDER BY clienteId";
        const params = [];

        return this.all(sql, params);
      }

    /**
     * Retorna um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @returns Os dados do cliente.
     */
    getCliente(clienteId){
        const sql = "SELECT clienteid, nome, cpf, telefone, STRFTIME('%d/%m/%Y', dataNascimento) as dataNascimento, estadoNascimento, estadoCivil FROM clientead WHERE clienteid = ?";
        const params = [clienteId];

        return this.each(sql, params);
    }

    /**
     * Insere um novo cliente.
     * 
     * @param {*} clienteId O id do cliente.
     * @param {*} nome O nome do cliente.
     * @param {*} cpf O cpf do cliente.
     * @param {*} telefone O telefone do cliente.
     * @param {*} dataNascimento A data de nascimento do cliente.
     * @param {*} estadoNascimento O estado de nascimento do cliente (1 - SC, 2 - RS, 3 - PR e 4 - outros).
     * @param {*} estadoCivil O estado civil do cliente (1 - Solteiro e 2 - Casado).
     * @returns 
     */
    inserir(clienteId, nome, cpf, telefone, dataNascimento, estadoNascimento, estadoCivil){
        const sql = "INSERT INTO clientead (clienteid, nome, cpf, telefone, dataNascimento, estadoNascimento, estadoCivil) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const params =  [clienteId, nome, cpf, telefone, dataNascimento, estadoNascimento, estadoCivil];

        return this.run(sql, params);
    }

    /**
     * Altera os dados de um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @param {*} nome O nome do cliente.
     * @param {*} cpf O cpf do cliente.
     * @param {*} telefone O telefone do cliente.
     * @param {*} dataNascimento A data de nascimento do cliente.
     * @param {*} estadoNascimento O estado de nascimento do cliente (1 - SC, 2 - RS, 3 - PR e 4 - outros).
     * @param {*} estadoCivil O estado civil do cliente (1 - Solteiro e 2 - Casado).
     * @returns 
     */
    alterar(clienteId, nome, cpf, telefone, dataNascimento, estadoNascimento, estadoCivil){
        const sql = "UPDATE clientead SET nome = ?, cpf = ?, telefone = ?, dataNascimento = ?, estadoNascimento = ?, estadoCivil = ? WHERE clienteId = ?";
        const params = [nome, cpf, telefone, dataNascimento, estadoNascimento, estadoCivil, clienteId];

        return this.run(sql, params);
    }

    /**
     * Exclui um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @returns 
     */
    excluir(clienteId){        
        const sql = "DELETE FROM cliente WHERE clienteId = ?";
        const params = [clienteId];

        return this.run(sql, params);
    }
}

// Exporta o modelo
module.exports = ClienteDAO;