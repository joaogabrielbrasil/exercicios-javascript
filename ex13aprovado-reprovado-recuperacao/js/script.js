var nome = String(window.prompt('Qual o nome do aluno: '))
var nota1 = Number(window.prompt('Digite sua primeira nota: '))
var nota2 = Number(window.prompt('Digite sua segunda nota: '))
var media = (nota1+nota2)/2

    if (media > 6) {
        window.alert(`${nome} está aprovado(a)`)  
        
    } else if (media >= 3) {
        window.alert(`${nome} está em recuperação`)
    }else {
        window.alert(`${nome} está reprovado(a)`)
    }