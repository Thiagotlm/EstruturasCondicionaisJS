/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 vaiáveis. Sendo elas:
    1-Preço do etanol;
    2-Preço da gasolina;
    3-O tipo de combustível que está no seu carro;
    2-Gasto médio de combustível do carro por KM;
    3-Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

/*entrada das declarações*/
const precoEtanol = 3.69;
const precoGasolina = 5.20;
const kmPorLitros = 13;
const distanciakm = 200;
const combustivelUsado = 'Gasolina';

const litrosConsumidos = distanciakm / kmPorLitros;

/*resolução */
if (combustivelUsado === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor gasto em Etanol é de: R$', valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('O valor gasto em Gasolina é de: R$', valorGasto.toFixed(2));
}
