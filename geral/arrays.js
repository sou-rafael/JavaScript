const array = [1, 12, 42, 34, 55];

array[0] = 1024;

console.log(array);

// é permitido alterar o valor de uma constante que esteja representando um tipo variável
// só não pode alterar a const de tipos primitivos
// tbm não pode mudar o tipo da const, nem alterar o seu nome, por exemplo

// array = 'Rafael' // erro!