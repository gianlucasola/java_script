var n = 3    /*  primeiramente foi atribuído o valor 3 para a VAR chamada nome  */
n = n + 4    /*  com essa auto-atribuição, o N passa a valer a soma do valor anterior (3) + 4, então agora vale 7   */


/*  até esta linha, N vale 7 (teve "atualização" em seu valor)  */


n *= 2    /*  esta simplificação de uma auto-atribuição significa N = N * 2, então o n que até então valia 7 passará a valer 7*2 = 14  */




/*  Incremento        
        v
   IMPORTANTE: chama-se PÓS-incremento, apenas "n++" NÃO EXIBE a mudança na tela, apenas incrementa "na memória".
   
   Para ver a mudança (o acréscimo ou decréscimo) na tela, precisa "perguntar ao JS o valor de n"!!
                                       */

var n = 9    /*  define a VAR n com o valor 9*/
n++    /*  acresce 1 ao n (vira 10)  */ 