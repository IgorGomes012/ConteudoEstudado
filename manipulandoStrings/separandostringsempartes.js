// Na programação é comum “quebrar” strings em partes menores e usar essas substrings para algum fim. No JavaScript temos um recurso nativo que cuida dessa tarefa, como podemos ver no flow a seguir.

// No Código 1 vemos tudo o que foi apresentado no flow.

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

let paises_array = paises_string.split(" ");

console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]

