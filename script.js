let gallery = [
  "./assets/img/gallery/1974b79c9c319-screenshotUrl.webp",
  "./assets/img/gallery/1974b7a022a99-screenshotUrl.webp",
  "./assets/img/gallery/1974b7abd033-screenshotUrl.webp",
  "./assets/img/gallery/1974b7ac61434-screenshotUrl.webp",
  "./assets/img/gallery/1974b7acfbd33-screenshotUrl.webp",
  "./assets/img/gallery/1974b7ad87823-screenshotUrl.webp",
  "./assets/img/gallery/1974b7affbe1-screenshotUrl.webp",
  "./assets/img/gallery/1974b7b09b816-screenshotUrl.webp",
  "./assets/img/gallery/1974b7b12e923-screenshotUrl.webp",
  "./assets/img/gallery/1974b7b325f68-screenshotUrl.webp",
  "./assets/img/gallery/1974b7b507674-screenshotUrl.webp",
  "./assets/img/gallery/1974b7b5b2f62-screenshotUrl.webp",
  "./assets/img/gallery/1974b7beb3026-screenshotUrl.webp",
  "./assets/img/gallery/1974b7c00400-screenshotUrl.webp",
  "./assets/img/gallery/1974b7c0a6174-screenshotUrl.webp",
  "./assets/img/gallery/1974b7c69d853-screenshotUrl.webp",
  "./assets/img/gallery/1974c97ff7d99-screenshotUrl.webp",
  "./assets/img/gallery/1974c986c3521-screenshotUrl.webp",
  "./assets/img/gallery/1974c9880d437-screenshotUrl.webp",
  "./assets/img/gallery/1974c98965872-screenshotUrl.webp",
  "./assets/img/gallery/1974c99110530-screenshotUrl.webp",
  "./assets/img/gallery/1974c99244966-screenshotUrl.webp",
  "./assets/img/gallery/1974c9af39382-screenshotUrl.webp",
  "./assets/img/gallery/1974c9b28b653-screenshotUrl.webp",
  "./assets/img/gallery/1974c9b3efe86-screenshotUrl.webp",
  "./assets/img/gallery/1974c9bea721-screenshotUrl.webp",
  "./assets/img/gallery/1974c9c706f38-screenshotUrl.webp",
  "./assets/img/gallery/1974c9c868b53-screenshotUrl.webp",
  "./assets/img/gallery/1974c9dfea046-screenshotUrl.webp",
  "./assets/img/gallery/1974c9e6e4570-screenshotUrl.webp",
  "./assets/img/gallery/1974c9f47f053-screenshotUrl.webp",
  "./assets/img/gallery/1974c9ff75614-screenshotUrl.webp",
  "./assets/img/gallery/1974ca1104e21-screenshotUrl.webp",
  "./assets/img/gallery/1974ca2215c18-screenshotUrl.webp",
  "./assets/img/gallery/1974ca2ee6c62-screenshotUrl.webp",
  "./assets/img/gallery/1974ca33f1c48-screenshotUrl.webp",
  "./assets/img/gallery/1974ca3838b88-screenshotUrl.webp",
  "./assets/img/gallery/1974ca3a4fd19-screenshotUrl.webp",
  "./assets/img/gallery/1974ca43f2096-screenshotUrl.webp",
  "./assets/img/gallery/1974ca473a08-screenshotUrl.webp",
  "./assets/img/gallery/1974ca48c9289-screenshotUrl.webp",
  "./assets/img/gallery/1974ca4a44151-screenshotUrl.webp",
  "./assets/img/gallery/1974ca5339d3-screenshotUrl.webp",
  "./assets/img/gallery/1974ca655e511-screenshotUrl.webp",
  "./assets/img/gallery/1974ca707c067-screenshotUrl.webp",
  "./assets/img/gallery/1974ca7fe0228-screenshotUrl.webp",
  "./assets/img/gallery/1974ca8869e95-screenshotUrl.webp",
];

let currentIndex = 0;
let currentPage = 1;
const itemsPerPage = 12;

function render() {
  const contentRef = document.getElementById("gallery-content");
  contentRef.innerHTML = "";

  const end = currentPage * itemsPerPage;

  for (let index = 0; index < end && index < gallery.length; index++) {
    contentRef.innerHTML += getImgTemplate(index);
  }

  if (end < gallery.length) {
    contentRef.innerHTML += `
      <div class="load-more-wrapper">
        <button onclick="loadMore()" class="load-more-btn">Mehr anzeigen</button>
      </div>
    `;
  }
}

function loadMore() {
  currentPage++;
  render();
}

function getImgTemplate(index) {
  return `
    <img 
      loading="lazy" 
      onclick="toggleOverlay(${index})" 
      src="${gallery[index]}" 
      alt="Bild ${index + 1}" 
    />
  `;
}

function toggleOverlay(index) {
  currentIndex = index;
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay-content").innerHTML = `
    <img src="${gallery[index]}" alt="Großansicht">
  `;
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("d-none");
}

function left() {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  document.getElementById("overlay-content").innerHTML = `
    <img src="${gallery[currentIndex]}" alt="Großansicht">
  `;
}

function right() {
  currentIndex = (currentIndex + 1) % gallery.length;
  document.getElementById("overlay-content").innerHTML = `
    <img src="${gallery[currentIndex]}" alt="Großansicht">
  `;
}

document.addEventListener("DOMContentLoaded", render);
