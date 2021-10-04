var produto = String(window.prompt('Qual o produto que você quer comprar: '))
var preco = Number(window.prompt(`Qual preco : ${produto}`))
var desconto = preco*0.1
var pagarPreco = preco - desconto 
window.alert(`O preço era ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
window.alert(`Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto`)
window.alert(`Você vai pagar ${pagarPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)