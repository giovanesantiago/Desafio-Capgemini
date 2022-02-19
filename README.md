# Desafio-Capgemini

    Repositorio criado com intuito de publicar e disponibilizar o desafio.
---
## Requisitos 
Ter instalado em sua máquina as seguintes ferramentas: Git e Node.js.

---
## Executar projeto 
 1. Clone este repositorio em sua maquina utilizando o gitbash:
 
``` 
git clone https://github.com/giovanesantiago/Desafio-Capgemini.git
```

2. Acesse a pasta do projeto e execute cada aplicação com o codigo no terminal de sua preferencia:

``` 
node (nome-arquivo).js
```



## Detalhes sobre os Algoritmos 

### **- Questão 1 -**
    Escrever um algortimo que criar uma escada de tamanho 'n':
#### Detalhes do algoritmo:

- Declarado uma variavel com nome 'n' para o tamanho da escada.
- Utilizando um laço de repetição (for) com duas variaveis usando repeat que junto com uma expressão dita a quantidade de '*' e espaços a ser adicionada a cada degrau da escada, a inteção do espaço é colocar a escada na mesma direção da imagem descrita no desafio.


**Obs: Para execução basta alterar o valor da variavel 'n' para o numero de degraus desejado e executar no terminal com nodeJS.**

---

### **- Questão 2 -**

    Validar senha cadastrada de forma que a senha adicionada seja uma senha forte. Validações :
    - Possui no mínimo 6 caracteres.
    - Contém no mínimo 1 digito.
    - Contém no mínimo 1 letra em minúsculo.
    - Contém no mínimo 1 letra em maiúsculo.
    - Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

#### Detalhos do algoritmo:
-    Declarado uma variavel com nome 'senha' para entrada da senha a ser validada.
-    Atraves de uma função que recebe a senha como paramentro, foi declarada uma variavel para cada requisito usando search e expressão regular para verificar a existencia do requisito solicitado e utilizado operadores de comparação para ter um resultado booleans para facilitar o uso no if.
-    Para retorno especifico de qual requisito de senha não foi atendido, foi usado o if retornado a respota especifica ao usuario de qual alteração deve ser feita para atingir os requisitos da senha.
-    Para confirmação de funcionamento do algoritmo foi feita um função chama 'teste', na qual temos uma arrays com 5 possiveis senhas que não atende aos requisitos uma para cada requisito um 1 correta com todos requisitos ok, e um laço de repitição chamando a função validar com as senhas da array como paramentro uma por uma.  

**Obs: Para execução basta alterar o valor da variavel 'senha' para a senha a ser validada e executar no terminal com nodeJS.**

---

### - Questão 3 - 

    Desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas

#### Detalhos do algoritmo:
- Declarado 3 variaveis : 
1. 'palavra' = Para entrada da palavra a ser retirada os angramas
2. 'arrayST' = uma array para armazena as substrings da palavra
3. 'cont' = para contagem dos pares de anagramas 
- Criada uma função anagrama que recebe como parametro a string a ser trabalhada.
- Dentro dela começamos com um arrow functions retornando a quantidade de letras repetidas na palavra.
- Tendo em vista que um anagrama so pode existir com letras iguais dentro dela, usamos uma condição com 'if' usando a arrow functions a cima para verificar se a letras repetidas para evitar passagem pelo codigo caso o retorno a arrow seja igual 0 
- Passado pela condição foi criado um laço de repetição para adicionar todas as supstrings na 'arrayST' 
- Apos adicionado as substrings na arrays foi criado de fato a função que vai fazer uma comparação se as substrings são iguais usando o '.sort' para organizar independe da sequencia, função essa que vai ser utilizada a função seguinte responsavel pela contagem dos anagramas dentro da palavra  .
- Nesta função de contagem de anagrama que dei o nome de 'qntAnagramas' possui dentro dela um laço de repição que possui uma condição que utiliza os parametros 'index' para indicar a substring dentro a arrayST e uma variavel com o resto da arrays que junto com função eAnagrama vai verificar se tem a mesma quantidade e se são iguais. 
- Passado pela condição e igualdade e letras e tamanho a variavel cont entra em ação somando 1 para cada true dessa condição
- Para finalizar utilizei mais um laço de repitição para dar suporte a função qntAnagramas pasando como paramentro 'i'(contador do for) e arrayST. 

**Obs: Para execução basta alterar o valor da variavel 'palavra' para adicionar a string a ser trabalhada e executar no terminal com nodeJS.**