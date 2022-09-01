const memeInsertBtn = document.querySelector('#meme-insert');
const containerMeme = document.querySelector('#meme-image-container');
const image = document.querySelector('#meme-image');
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

// let srcUploadImage = null;

inputText.addEventListener('keyup', () => { // Texto do meme
  memeText.id = 'meme-text';
  memeText.innerText = inputText.value;
});

memeInsertBtn.addEventListener('change', (event) => { // https://www.codegrepper.com/code-examples/javascript/how+to+show+uploaded+image+in+js <-- Me ajudou a fazer essa parte.
// Imagem meme
  image.src = URL.createObjectURL(event.target.files[0]);
});

document.querySelector('#fire').addEventListener('click', () => { // Botão fire
  containerMeme.style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', () => { // Botão water
  containerMeme.style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', () => { // Botão earth
  containerMeme.style.border = '6px groove green';
});

document.querySelector('#black').addEventListener('click', () => {
  containerMeme.style.border = '1px solid black';
});

meme1.addEventListener('click', () => {
  image.src = meme1.src;
});

meme2.addEventListener('click', () => {
  image.src = meme2.src;
});

meme3.addEventListener('click', () => {
  image.src = meme3.src;
});

meme4.addEventListener('click', () => {
  image.src = meme4.src;
});
