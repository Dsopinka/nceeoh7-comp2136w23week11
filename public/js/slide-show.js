"use strict";

const $ = (selector) => document.querySelector(selector);

let imageCounter = 0;
let imageCache = [];
let slideshowInterval;

const caption = $("#caption");
const mainImage = $("#main_image");
const prevButton = $("#prev");
const nextButton = $("#next");

const startSlideshow = () => {
    slideshowInterval = setInterval(swapImage, 4000);
}

const stopSlideshow = () => {
    clearInterval(slideshowInterval);
}

const swapImage = () => {
    imageCounter = (imageCounter +1) % imageCache.length;

    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;

    caption.textContent = imageCache[imageCounter].alt;
}

const showImage = (index) => {
    if (index < 0 || index >= imageCache.length) {
        return;
    }

    imageCounter = index;
    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;
    caption.textContent = imageCache[imageCounter].alt;
}

prevButton.addEventListener("click", () => {
    stopSlideshow();
    imageCounter = (imageCounter - 1 + imageCache.length) % imageCache.length;
    showImage(imageCounter);
});

nextButton.addEventListener("click", () => {
    stopSlideshow();
    imageCounter = (imageCounter + 1) % imageCache.length;
    showImage(imageCounter);
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#image_list a");
    let image;

    for (let link of links) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        imageCache.push(image);
    }

    startSlideshow();
});
