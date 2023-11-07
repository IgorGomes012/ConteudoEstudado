function meuEscopo() {
    const form = document.querySelector('.form');

    //o form tem um objeto addeventlistener que basicamente adiciona um evento que escuta, passamos com parametro submit que quer dizer enviar, e dentro desse objeto temos uma function anonima que fala evento.previna o padrao  que no caso seria o subimit    
    form.addEventListener('submit', (event) => { event.preventDefault() })
}
meuEscopo();