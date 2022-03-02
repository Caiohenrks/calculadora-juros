import entradaDados from 'readline-sync';

console.log("Aplicação de Juros");
console.log("\n\n");

let valorDevido = entradaDados.question("Digite o valor devido: ");
    if(valorDevido <= 0){
        console.log("O Valor da dívida deve ser maior que zero");
        exit;
    }


let qtdDias = entradaDados.question("Quantidade de dias desde o vencimento do boleto: ");
    if(qtdDias <= 0){
        console.log("Você está em dia");
        exit;
    }

let juros;

if(Number(qtdDias) > 15){
    juros = 10;
}else{
    juros = 5;
}


console.log("\n");

console.log("Valor original da dívida: R$"+valorDevido);
console.log("Dias atrasados: "+qtdDias);
console.log("Taxa de juros: "+juros+"%");
console.log("Valor total com juros: R$"+(Number(valorDevido)+(valorDevido*juros)/100));