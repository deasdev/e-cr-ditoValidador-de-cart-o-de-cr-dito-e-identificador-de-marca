oValidador de cartão de crédito e identificador de marca em JavaScript
Visão geral
Este projeto é uma função JavaScript ( ) que valida um número de cartão de crédito e identifica sua respectiva marca com base nos padrões numéricos fornecidos .validarCartaoCredito

Características
Validação básica : verifica se o número do cartão de crédito corresponde aos padrões de prefixo e comprimento de diferentes marcas .

Identificação da marca : Retorna o nome da marca do cartão de crédito (por exemplo, Visa, Mastercard, American Express, Elo, etc.).

Tratamento de entrada : remove caracteres não numéricos do número do cartão antes da validação.

Como usar​
Inclua o código no seu projeto:

Você pode incluir a validarCartaoCredito função diretamente no seu arquivo JavaScript ou dentro de uma tag no seu HTML.<script>

HTML
<script>
// Insert the provided function code here.
</script>
Chame a função:

Passe o número do cartão de crédito como uma string para a função. Ela retornará o nome da marca ou uma mensagem de erro indicando uma entrada inválida .validarCartaoCredito()

JavaScript
const cardNumber = "4111111111111111";
const brand = validarCartaoCredito(cardNumber);
console.log(`Card brand: ${brand}`);

const invalidNumber = "12345";
const result = validarCartaoCredito(invalidNumber);
console.log(`Validation result: ${result}`);
Validação adicional usando o algoritmo de Luhn :

Para validar ainda mais o número do cartão de crédito , use a função fornecida.validarLuhn

Marcas Suportadas
A validarCartaoCredito função reconhece as seguintes marcas:

Visa

MasterCard

American Express

Quanto

Diners Club

Descobrir

Hipercard

JCB

Aura

UnionPay

Maestro

Exemplo de uso
Aqui estão alguns exemplos de chamadas para a função:

JavaScript
console.log(validarCartaoCredito("412345678901234")); // Visa
console.log(validarCartaoCredito("5512345678901234")); // Mastercard
console.log(validarCartaoCredito("341234567890123")); // American Express
// And so on...
Notas
Esta função executa validação básica usando padrões de prefixo e comprimento , mas não valida o número do cartão de crédito em si usando o algoritmo de Luhn .

As marcas suportadas e seus padrões podem ser atualizados ao longo do tempo. Mantenha o código do seu projeto alinhado aos padrões atuais .

Contribuindo
Sinta -se à vontade para sugerir melhorias ou levantar problemas viaGitHub. Contribuições são bem-vindas!

Licença
Este projeto está licenciado sob aLicença MIT.
