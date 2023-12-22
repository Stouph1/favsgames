const cardsContainer = document.querySelector(".container");
const background = document.getElementById("Blur");
const music = document.getElementById("music");

cardsContainer.addEventListener("click", (e) => {
  // On met dans la variable target, la div de la card
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  // Ici, on va accéder à l'image juste en dessous de la div de la card et récupérer son fond
  console.log(target.id)

  if (target.id === "spiderman") {
    music.src = "audio/Spiderman.mp3"
  }
  if (target.id === "God-Of-War") {
    music.src = "audio/God-of-war.mp3"
  }
  if (target.id === "minecraft") {
    music.src = "audio/minecraft.mp3"
  }
  if (target.id === "Stray") {
    music.src = "audio/stray.mp3"
  }
  if (target.id === "TLOU") {
    music.src = "audio/the-last-of-us.mp3"
  }
  if (target.id === "Uncharted") {
    music.src = "audio/uncharted.mp3"
  }
  const imageSrc = target.children[0].src
  
  target.classList.add("active");
  // Ici, on va modifier le fond d'écran global selon l'image qu'on a récupéré juste avant
  background.style.backgroundImage = `url(${imageSrc})`

  //const music = document.getElementById("music");

  music.play()
});
