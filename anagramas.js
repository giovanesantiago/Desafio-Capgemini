var palavra = "ifailuhkqq" 
var arrayST = []
var cont = 0

function anagrama(palavra) {
    // Retorna uma array com as letras repitidas
    const duplicaT = palavra.split('').filter((letra, Index) => {
        return palavra.indexOf(letra) !== Index
    }).length
    
    if(duplicaT) { // se caso existir letra repitidas
        //adiciona todas as substrings da palavra a arrayST
        for(let i= 0; i < palavra.length; i++) {
            for (let c = i + 1; c <= palavra.length; c++) {
                arrayST.push(palavra.slice(i, c))
            }
        }

        function eAnagrama(p1, p2) {
            // a comparação é feita na sequencia separa -> organiza -> junta
            return (p1.split('').sort().join() === p2.split('').sort().join()) 
        }
        
        // função para contar quantos Anagramas tem
        function qntAnagramas(index, array) {
            const novaST = array[index]
            const resto = array.slice(index + 1)

            for( let i = 0 ; i < resto.length; i++) {
                // verifica se tem a mesma quantidade e se são iguais 
                if(novaST.length == resto[i].length && eAnagrama(novaST, resto[i])) {
                    return cont++
                }
            }
        }

        // vai fazer a contagem de anagramas chamando a função qntAnagramas passando o index
        for(let i = 0; i < arrayST.length; i++) {
            qntAnagramas(i, arrayST)
        }

        console.log(cont)
    }else { // caso não tenha palavras repitidas ja retorna zero
        console.log(0)
        return 0
    }
    

}
anagrama(palavra)
