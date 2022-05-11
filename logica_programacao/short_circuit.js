/*
as expressões com OR, retornam o ultimo valor ou o VALOR do "primeiro true"
*/

const a = 0;
const b = NaN;
const c = '';
const d = '1false1'; // esse é avaliado como verdadeiro em JS
const e = null;

console.log(a||b||c||d||e);