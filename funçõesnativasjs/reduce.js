// A função nativa (método) reduce é utilizada para reduzir um array a um único valor. Esse valor reduzido pode ser um número, uma string, um array ou um objeto.

const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 3, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
  function somarValor (total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  
    return total + valorTotal;
  }
  
  const valorAPagar = itensCarrinho.reduce(somarValor, 0);
  
  console.log(valorAPagar);