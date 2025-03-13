// Calculadora Simples
// Função para cacular

function calcular (numero1, numero2, operacao) {
    let resultado;
    
    // Verificando a operação selecionada
    switch (operacao) {
        case '+':
            resultado = numero1+numero2;
            break
        case '*': 
        resultado = numero1*numero2;
            break
        case '-':
            resultado = numero1-numero2;
            break
        case '/':
            if (numero2 !==0) { resultado = numero1/numero2;
        } else { 
            return 'erro: Divisão por zero !';
                         
        }   break;
        default:
            return 'operação invalida';
        }   
        return resultado;
    }

    // Codigos de entrada :

    const numero1 = parseFloat(prompt("Digite o Primeiro numero:"));
    const numero2 = parseFloat(prompt("Digite o segundo numero:"));
    const operacao = prompt("Digite a operaçáo desejada (+,*,-,/):");

    const resultado = calcular(numero1,numero2,operacao);
    console.log('Resultado:',resultado);