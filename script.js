let gallery = [
    './assets/img/gallery/night-city1.png',
    './assets/img/gallery/night-city2.png',
    './assets/img/gallery/night-city3.png',
    './assets/img/gallery/night-city4.png',
    './assets/img/gallery/night-city5.png',
    './assets/img/gallery/night-city6.png',
    './assets/img/gallery/night-city7.png',
    './assets/img/gallery/night-city8.png',
    './assets/img/gallery/night-city9.png',
]

function init(){
    let contentRef = document.getElementById("gallery-content");
    contentRef.innerHTML = "";
    for (let index = 0; index < gallery.length; index++) {
        contentRef.innerHTML += `<img src=${gallery[index]} />`
    }
}