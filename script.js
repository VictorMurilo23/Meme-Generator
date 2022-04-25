let inputTexto = document.querySelector('#text-input')
inputTexto.addEventListener('keyup', function () {
    let memeTexto = document.querySelector('#meme-text')
    memeTexto.id = 'meme-text'
    memeTexto.innerText = inputTexto.value 
}) 


let botaoMemeInsert = document.querySelector('#meme-insert')
let containerMeme = document.querySelector('#meme-image-container')

botaoMemeInsert.addEventListener('change', function (event) { // https://www.codegrepper.com/code-examples/javascript/how+to+show+uploaded+image+in+js <-- Me ajudou a fazer essa parte.
    let image = document.querySelector('#meme-image')
    image.src = URL.createObjectURL(event.target.files[0])
    containerMeme.appendChild(image)
})


// ------------------------------------------------------------

document.querySelector('#fire').addEventListener('click', function () {
    containerMeme.style.border = '3px dashed red'
})

document.querySelector('#water').addEventListener('click', function() {
    containerMeme.style.border = '5px double blue'
})

document.querySelector('#earth').addEventListener('click', function() {
    containerMeme.style.border = '6px groove green'
})