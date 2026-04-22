let salarioBruto = parseFloat (prompt("Digite o seu salário bruto mensal (ex: 15,000.00):"));
let imposto = 0;
let aliquota = "";

if (salarioBruto <= 5000.00){
    imposto = 0;
    aliquota = "isento";
} else if (salarioBruto >= 5000.01){
    imposto = salarioBruto * 0.075; //7.5%
    aliquota = "Aliquota de 7,5%";
} else if (salarioBruto >= 6500.01){
    imposto = salarioBruto * 0.15; //15%
    aliquota = "Aliquota de 15%";
} else if (salarioBruto >= 8000.01){
    imposto = salarioBruto * 0,225; //22,5%
    aliquota = "Aliquota de 22,5%";
} else {
    imposto = salarioBruto * 0.275; //27,5%
    aliquota = "Aliquota de 27,5%";
} 

let salarioLiquido = salarioBruto - imposto; //Calculo salario liquido
alert("Recibo de Pagamento");
alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}\nAliquota aplicada:${aliquota}\nValor desconto de IR: R$ ${imposto.toFixed(2)}\nSalário Líquido: R$ ${salarioLiquido.toFixed(2)}`);