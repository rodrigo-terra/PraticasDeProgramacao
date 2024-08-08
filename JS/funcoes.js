function somar(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const soma = n1 + n2

    document.getElementById('resultado').innerHTML = 'A soma dos números é ' + soma
}

function subtrair(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const subtrai = n1 - n2
    
    document.getElementById('resultado').innerHTML = 'A subtração dos números é ' + subtrai
}

function multiplicar(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const multiplica = n1 * n2
    
    document.getElementById('resultado').innerHTML = 'A multiplicação dos números é ' + multiplica
}

function dividir(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const divide = n1 / n2
    
    document.getElementById('resultado').innerHTML = 'A divisão dos números é ' + divide
}