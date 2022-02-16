const senha = "Ya3iab"

function validar (senha) {
    const qntLetras = senha.length >= 6
    const upperCase = senha.search(RegExp('[A-Z]')) > -1
    const lowCase = senha.search(RegExp('[a-z]')) > -1
    const temNumber = senha.search(RegExp('[0-9]')) > -1
    const temCaract = senha.search(RegExp('[!@#$%^&*()-+]')) > -1
    
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
    

    return 'Senha Forte';
}




console.log(validar(senha))