const $html = document.querySelector('html');
const $element = document.querySelector('.btnMode');
// selecionando elementos do html e guardando numa variavel

$element.addEventListener('click', () => {
    // criando função, faz uma ação quando o usuario clicar no botao
    $html.classList.toggle('darkMode')
    // adiciona ou remove a tag darkMode
})