let gallery = [
  "./assets/img/gallery/1974b79c9c319-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7a022a99-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7abd033-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7ac61434-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7acfbd33-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7ad87823-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7affbe1-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7b09b816-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7b12e923-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7b325f68-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7b507674-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7b5b2f62-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7beb3026-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7c00400-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7c0a6174-screenshotUrl.jpg",
  "./assets/img/gallery/1974b7c69d853-screenshotUrl.jpg",
  "./assets/img/gallery/1974c97ff7d99-screenshotUrl.jpg",
  "./assets/img/gallery/1974c986c3521-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9880d437-screenshotUrl.jpg",
  "./assets/img/gallery/1974c98965872-screenshotUrl.jpg",
  "./assets/img/gallery/1974c99110530-screenshotUrl.jpg",
  "./assets/img/gallery/1974c99244966-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9af39382-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9b28b653-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9b3efe86-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9bea721-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9c706f38-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9c868b53-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9dfea046-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9e6e4570-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9f47f053-screenshotUrl.jpg",
  "./assets/img/gallery/1974c9ff75614-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca1104e21-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca2215c18-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca2ee6c62-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca33f1c48-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca3838b88-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca3a4fd19-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca43f2096-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca473a08-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca48c9289-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca4a44151-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca5339d3-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca655e511-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca707c067-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca7fe0228-screenshotUrl.jpg",
  "./assets/img/gallery/1974ca8869e95-screenshotUrl.jpg",
];

let currentIndex = 0;

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
  currentIndex = index;
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.remove("d-none");
  let overlayContentRef = document.getElementById("overlay-content");
  overlayContentRef.innerHTML = /*html*/ `
    <img src=${gallery[index]}>
  `;
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("d-none");
}

function left() {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  let overlayContentRef = document.getElementById("overlay-content");
  overlayContentRef.innerHTML = `<img src="${gallery[currentIndex]}">`;
}

function right() {
  currentIndex = (currentIndex + 1) % gallery.length;
  let overlayContentRef = document.getElementById("overlay-content");
  overlayContentRef.innerHTML = `<img src="${gallery[currentIndex]}">`;
}
