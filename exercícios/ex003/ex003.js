var n1 = 8  
var n2 = 4 /* nesse exercício não há necessidade de converter, porque JÁ ESTÃO sendo armazenados como number */

var s = n1 + n2

/* pode ser usado _TYPEOF N1_ para "consutar" como o n1 está sendo armazenado (como number, nesse caso) */



Number.parseInt(document.write(`O resultado da soma de n1 + n2 é igual a ${s}`))

/*  ^----  mesmo não precisando nesse caso, usei o _Number.parseInt_ para fazer essa anotação de que existem três "parâmetros" para conversão em número:

    - Number: identifica se precisa converter de string para número INTeiro ou FLOAT (com ponto/decimal);

    - Number.parseInt: converte de string para número INTeiro (se houver algum decimal, será considerada apenas a parte inteira, sem o décimo)

    - Number.parseFloat: converte de string para número Float (Float = ponto --> significa decimal)
*/  

