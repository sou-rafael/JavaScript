const pessoa = {
    nome : 'Rafael',
    sobrenome : 'Souza',
    idade : 40,
    fala() {
        return `${this.nome} ${this.sobrenome} está falando oi!!`
    }
};

console.log(pessoa.nome)
console.log(typeof pessoa)
console.log(pessoa.fala())