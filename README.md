# Desafio-Capgemini

    Repositorio criado com intuito de publicar e disponibilizar o desafio.

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



