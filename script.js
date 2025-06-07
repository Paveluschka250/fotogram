let gallery = [
  "./assets/img/gallery/night-city1.png",
  "./assets/img/gallery/night-city2.png",
  "./assets/img/gallery/night-city3.png",
  "./assets/img/gallery/night-city4.png",
  "./assets/img/gallery/night-city5.png",
  "./assets/img/gallery/night-city6.png",
  "./assets/img/gallery/night-city7.png",
  "./assets/img/gallery/night-city8.png",
  "./assets/img/gallery/night-city9.png",
];

function render() {
  let contentRef = document.getElementById("gallery-content");
  contentRef.innerHTML = "";
  for (let index = 0; index < gallery.length; index++) {
    contentRef.innerHTML += getImgTemplate(index);
  }
}

function getImgTemplate(index) {
  return /*html*/ `
        <img onclick="toggleOverlay(${index})" src=${gallery[index]} />
    `;
}

function toggleOverlay(index) {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.toggle("d-none");
  let overlayContentRef = document.getElementById("overlay-content");
  overlayContentRef.innerHTML = "";
  overlayContentRef.innerHTML += /*html*/ `
    <img src="${gallery[index]}">
  `;
}
