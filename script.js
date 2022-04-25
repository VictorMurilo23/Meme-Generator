let inputTexto = document.querySelector('#text-input')
inputTexto.addEventListener('keyup', function () {
    let memeTexto = document.querySelector('#meme-text')
    memeTexto.innerText = inputTexto.value 
}) 
