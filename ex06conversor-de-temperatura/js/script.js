window.alert(`Conversor de Temperaturas`)
var celsius = Number(window.prompt('Digite a temperatura em ºC: '))
var fahrenheit = celsius * 1.8 + 32
var kelvin = celsius + 273
window.alert(`ºC ${celsius.toFixed(2)} em Fahrenheit é igual a: ${fahrenheit.toFixed(2)}`)
window.alert(`ºC ${celsius.toFixed(2)} em Kelvin é igual a: ${kelvin.toFixed(2)}`)