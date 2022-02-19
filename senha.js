const senha = "Ya3iab" // Variavel para entrada da senha


// função para validar senha
function validar(senha) {
    // variaveis para verificar condições 
    const qntLetras = senha.length >= 6
    const upperCase = senha.search(RegExp('[A-Z]')) > -1
    const lowCase = senha.search(RegExp('[a-z]')) > -1
    const temNumber = senha.search(RegExp('[0-9]')) > -1
    const temCaract = senha.search(RegExp('[!@#$%^&*()-+]')) > -1
    

    // Condições para especificar por qual validação a senha não passou
    if (!qntLetras) {
        return `Sua senha  faltou ${6 - senha.length} caracteres!`
    }
    if (!upperCase) {
        return 'Sua senha faltou uma letra maíscula!';
    }
    if (!lowCase) {
        return 'Sua senha faltou uma letra minuscula!';
    }
    if (!temNumber) {
        return 'Sua senha faltou um número!';
    }
    if (!temCaract) {
        return 'Sua senha faltou um caractere especial!';
    }
    
    // caso passe em todos os if retorno de senha ok
    return 'Senha Forte';
}


// Função para testar todas as validações
function teste() { 
    const array = ['D1*d', 'D*dsdD', "D*1TD2", "d*1td2", "D11tD2", "D*1td2"]
    for(var i in array ) {
        console.log(validar(array[i]))
        console.log(i)
    }
}

//chamada de função para validar senha
validar(senha)

// chamada de função teste das validações
teste()