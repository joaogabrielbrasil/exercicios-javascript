var cotacaoDolar = Number(window.prompt('Qual a cotação do dolar: US$'))
var reais = Number(window.prompt('Quanto reais você tem na carteira: R$'))
var dolar = reais/cotacaoDolar
window.alert(`${reais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} convertendo para dolares é igual a ${dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USS'})}`)