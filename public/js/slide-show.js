"use strict";

const $ = (selector) => document.querySelector(selector);

let imageCounter = 0;
let imageCache = [];

const caption = $("#caption");
const mainImage = $("#main_image");

const preloadImages = () => {
  const links = document.querySelectorAll("a");
  let image;

  for (let link of links) {
    image = new Image();
    image.src = link.href;
    image.alt = link.title;
    imageCache.push(image);
  }
}

const swapImage = () => {
  imageCounter = (imageCounter + 1) % imageCache.length;

  mainImage.src = imageCache[imageCounter].src;
  mainImage.alt = imageCache[imageCounter].alt;

  caption.textContent = imageCache[imageCounter].alt;
}

document.addEventListener("DOMContentLoaded", () => {
  preloadImages();
  setInterval(swapImage, 2000);
});
