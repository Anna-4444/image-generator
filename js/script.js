const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const results = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await results.json();
    // console.log(images);
    selectRandomImage(images);
};


const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author; 
    const imgAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imgAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
    getImage();
});



