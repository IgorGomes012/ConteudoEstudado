// Uma forma fácil de percorrer um array é utilizando a função nativa forEach. Através dela conseguimos executar uma função para cada elemento do array.

// Aprenda no Flow abaixo a função nativa (método) forEach.

const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
  ];
  
  function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
  }
  
  produtos.forEach(imprimirProduto);


  /////////////////////////////////////////////////////////////////////////////


  const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
    {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
  ];
  
  function imprimirItem( produto, index ) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;
  
    console.log( texto );
  }
  
  carrinho.forEach(imprimirItem);

  console.log(carrinho)