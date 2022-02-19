var n = 10 // Variavel para a quantidade de degraus

// Laço de repitição para criar a escada
for (var c = 1; c <= n; c++) { 
    //variavel para colocar espaços e fazer a escada seguir para direita 
    var space = ' '.repeat(n - c)
    // variavel para quantidade de '*' por degraus
    var char = '*'.repeat(c)
    
    console.log(space + char)
}