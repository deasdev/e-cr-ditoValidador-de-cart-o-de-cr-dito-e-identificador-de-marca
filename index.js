function validarCartaoCredito(numeroCartao) {
    numeroCartao = numeroCartao.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    const bandeiras = [
      { nome: 'Visa', regex: /^4/, digitos: [13, 14, 15, 16, 17, 18, 19] },
      { nome: 'Mastercard', regex: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)/, digitos: [16] },
      { nome: 'American Express', regex: /^(34|37)/, digitos: [15] },
      { nome: 'Elo', regex: /^(401178|431274|5067|627780|636297)/, digitos: [16] },
      { nome: 'Diners Club', regex: /^(30|36|38|39)/, digitos: [14, 15, 16] },
      { nome: 'Discover', regex: /^(6011|622126|622925|644|645|646|647|648|649|65)/, digitos: [16] },
      { nome: 'Hipercard', regex: /^(38|60)/, digitos: [16] },
      { nome: 'JCB', regex: /^35/, digitos: [16] },
      { nome: 'Aura', regex: /^50/, digitos: [16] },
      { nome: 'UnionPay', regex: /^62/, digitos: [16, 17, 18, 19] },
      { nome: 'Maestro', regex: /^(50|56|57|58|6)/, digitos: [12, 13, 14, 15, 16, 17, 18, 19] },
    ];
  
    for (const bandeira of bandeiras) {
      if (bandeira.regex.test(numeroCartao) && bandeira.digitos.includes(numeroCartao.length)) {
        return bandeira.nome;
      }
    }
  
    return 'Bandeira não identificada ou número de cartão inválido.';
  }
  
  // Exemplos de uso:
  console.log(validarCartaoCredito("412345678901234")); // Visa
  console.log(validarCartaoCredito("5512345678901234")); // Mastercard
  console.log(validarCartaoCredito("341234567890123")); // American Express
  console.log(validarCartaoCredito("4011781234567890")); // Elo
  console.log(validarCartaoCredito("30123456789012")); // Diners Club
  console.log(validarCartaoCredito("6011123456789012")); // Discover
  console.log(validarCartaoCredito("3812345678901234")); // Hipercard
  console.log(validarCartaoCredito("3512345678901234")); // JCB
  console.log(validarCartaoCredito("5012345678901234")); // Aura
  console.log(validarCartaoCredito("621234567890123456")); // UnionPay
  console.log(validarCartaoCredito("5012345678901")); // Maestro
  console.log(validarCartaoCredito("1234")); // Bandeira não identificada ou número de cartão inválido.
  console.log(validarCartaoCredito("51111111111111111")); // Bandeira não identificada ou número de cartão inválido (dígitos incorretos para Mastercard)