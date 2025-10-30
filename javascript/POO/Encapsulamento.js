class Cofre {
    #senha
    #saldo

    constructor(senha) {
        this.#senha = senha

        this.#saldo = 0
    }
    
    #validarSenha(senha) {
        return senha === this.#senha
    }

    verSaldo(senha) {
        if (this.#validarSenha(senha)) {
            console.log (`Saldo do cofre R$ ${this.#saldo}`)
        } else {
            console.log (`Senha inválida`)
        }
    }

    depositar(senha, valor) {
        if (this.#validarSenha(senha)) {
            this.#saldo += valor
        } else {
            console.log (`Senha inválida`)
        }
    }

    sacar
}