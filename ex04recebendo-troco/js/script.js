var produto = String(window.prompt('Qual o produto que você comprar: '))
var preco = Number(window.prompt('Qual é o valor do produto: '))
var dinheiro = Number(window.prompt('Digite o seu dinheiro: '))
var troco = dinheiro - preco

if (dinheiro >= preco) {
    window.alert(`Compra do produto realizada com sucesso!`)
    window.alert(`Seu produto custou ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e seu troco foi de ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

}else {
    window.alert('Infelizmente sua comprar não foi processada')
    window.alert(`O produto custa ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e seu dinheiro é ${dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}