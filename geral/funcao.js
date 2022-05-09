function saudacoes() {
    console.log('Olá!!')
}

function bom_dia(nome) {
    return `Olá vai para ${nome}`
}

const raiz = function(n) {
    return n**0.5
}; // neste caso É NECESSARIO O PONTO E VIRGULA


// ARROW FUNCTION:
const quadrado = n => n * n;

saudacoes();
bom_dia('Rafael'); // agora a função não será exibida fora do console.log

console.log(bom_dia('Alice'));

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(124));

console.log(quadrado(24));

