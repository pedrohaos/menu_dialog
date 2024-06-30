const btnAbrir = document.querySelector('#abrirMenu');
const btnFechar = document.querySelector('#fecharMenu');
const dialog = document.querySelector('#menu');


const mostrarMenu = function(){
    dialog.showModal();
    dialog.style.width = '200px';
}

const esconderMenu = function(){
    dialog.style.width = '0';
    setTimeout(() => {
        dialog.close();
    }, 300);
}

btnAbrir.addEventListener('click',mostrarMenu);
btnFechar.addEventListener('click',esconderMenu);

window.addEventListener('scroll', esconderMenu);
