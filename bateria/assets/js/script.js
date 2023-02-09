// Reconhecer a tecla digitada

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});
document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;
  if (song !== "") {
    let songArray = song.split("");
    
    for(let i in songArray){
      songArray[i].play();
    }
    
  }
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  // Verificando se o audio foi encontrado...
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 400);
  }
}
