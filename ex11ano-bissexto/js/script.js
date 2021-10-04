var ano =  Number(window.prompt('Qual o ano que você quer verificar se é Bissexto: '))

var anoBissexto = (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0 ? 'É ano bissexto' : 'Não é ano bissexto'

window.alert(`${anoBissexto}`)