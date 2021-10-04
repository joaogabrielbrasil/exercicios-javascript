var funcionario = String(window.prompt('Qual o nome do funcionario: '))
var salario = Number(window.prompt(`Qual o salario do ${funcionario}`))
var reajusteSalario = Number(window.prompt(`${funcionario} vai ter reajuste salarial em qual porcentagem: `))
var reajusteSalarioReceber = salario*0.18
var salarioAtual = salario + reajusteSalarioReceber

window.alert(`${funcionario} recebia mensalmente um salário de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

window.alert(`Com o aumento de ${reajusteSalario}% , o salário vai aumentar ${reajusteSalarioReceber.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

window.alert(`${funcionario} vai começar a receber atualmente com salário de ${salarioAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
