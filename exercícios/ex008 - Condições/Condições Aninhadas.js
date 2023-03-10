var idade = 45  /*  define var de nome idade   */

console.log(`Você tem ${idade} anos.`)

    if (idade < 16){  /*  se a idade for menor que 16...   */
        console.log('Não vota.')  /*  console exibirá "Não vota."   */
    } else {  /*  se for maior que 16...   */
        if (idade < 18 || idade > 65){  /*  ...for menor que 18 OU (||) maior que 65...    */      
            console.log('Voto opcional.')  /*  console exibirá "Voto opcional."   */
        } else{  /*  senão (de 18 a 65)...   */
            console.log('Voto obrigatório.')  /*  console exibirá "Voto obrigatório."   */
        }
    }
