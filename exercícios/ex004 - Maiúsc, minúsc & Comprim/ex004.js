var nome = 'Gianluca'
var num = 29.9

document.write(`Olá, ${nome.toUpperCase()}!<br>`) 
/*  ^--- escrever no documento html a frase "Olá, Gianluca da Silva Sola" com a _var_ chamada nome escrita em MAIÚSCULA

IMPORTANTE atentar que há "()" logo após a função .toUpperCase, senão não transforma em maiúscula!
*/




document.write(`Seu nome possui <strong>${nome.length} letras!</strong><br><br>`)
/* é possível usar algumas tag's de html dentro da string, por exmplo a tag <br> usada no final da string da frase "Olá, Gianluca!" para QUEBRAR A LINHA*/




document.write(`Também é possível definir, em um número, a quantidade de casas após a vírgula.<br>Por exemplo, ${num} com duas casas decimais: ${num.toFixed(2)}.`)
/* _.toFixed(qtd de casas decimais)_ define a quantidade de números após a vírgula */