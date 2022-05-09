function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    const pessoa = {
        nome,
        sobrenome,
        peso,
        altura
    };


    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(pessoas);
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()