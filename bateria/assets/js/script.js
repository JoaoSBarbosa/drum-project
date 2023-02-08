// Reconhecer a tecla digitada

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`)
  // Verificando se o audio foi encontrado...
  if (audioElement) {
    audioElement.play();
  }
  if(keyElement){
   keyElement.classList.add('active');
  }
}
