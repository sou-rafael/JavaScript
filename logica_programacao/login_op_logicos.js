/*

&&  é AND
|| é OR
! é NOT

em JavaScript tudo pode ser avaliado em true ou false, então:
    FALSY VALUES
        false (o falso literal)
        0
        '' "" (uma string vazia)
        null / undefined
        NaN
    
    isto pode ser usado em uma checagem tipo: is usuario {...};
 
*/
const usuario = 'Luis';
const senha = '123';

// form de log para checar com o usuario e senha
const fazerLogin = usuario == 'Luis' && senha === '123';
console.log(fazerLogin);
