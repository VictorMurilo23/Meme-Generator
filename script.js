const inputTexto = document.querySelector('#text-input');
inputTexto.addEventListener('keyup', () => { // Texto do meme
  const memeTexto = document.querySelector('#meme-text');
  memeTexto.id = 'meme-text';
  memeTexto.innerText = inputTexto.value;
});

const botaoMemeInsert = document.querySelector('#meme-insert');
const containerMeme = document.querySelector('#meme-image-container');
const image = document.querySelector('#meme-image');

botaoMemeInsert.addEventListener('change', (event) => { // https://www.codegrepper.com/code-examples/javascript/how+to+show+uploaded+image+in+js <-- Me ajudou a fazer essa parte.
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
// ------------------------------
const meme1 = document.querySelector('#meme-1');
meme1.addEventListener('click', () => {
  image.src = meme1.src;
});

const meme2 = document.querySelector('#meme-2');
meme2.addEventListener('click', () => {
  image.src = meme2.src;
});

const meme3 = document.querySelector('#meme-3');
meme3.addEventListener('click', () => {
  image.src = meme3.src;
});

const meme4 = document.querySelector('#meme-4');
meme4.addEventListener('click', () => {
  image.src = meme4.src;
});
