function calcular(operacao){
    const n1 = document.getElementById('n1').value // Atribui a variável do primeiro número
    const n2 = document.getElementById('n2').value // Atribui a variável do segundo número

    let resultado // Chama o resultado para cada operação
    switch(operacao){
        case '+': resultado = somar(n1, n2); break;
        case '-': resultado = subtrair(n1, n2); break;
        case '*': resultado = multiplicar(n1, n2); break;
        case '/': resultado = dividir(n1, n2); break;
    }
    document.getElementById('resultado').innerHTML = 'O resultado é ' + resultado // Mensagem acompanhada do resultado
    }

function somar(n1, n2){ // Função somar atualizada
    return Number(n1) + Number(n2)
}

function subtrair(n1, n2){ // Função subtraie atualizada
    return Number(n1) - Number(n2)
}

function multiplicar(n1, n2){ // Função multiplicar atualizada
    return Number(n1) * Number(n2)
}

function dividir(n1, n2){ // Função dividir atualizada
    if ( n2 == 0){ // Caso a divisão seja executada por "0" retorna o erro
        console.error('Não é possível dividir numeros por 0')
        return null
    } else{
    return Number(n1) / Number(n2)
    }
}