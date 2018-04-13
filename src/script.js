/**
  William Sonoma Challege

**/
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import products from './products.json';
import './style.css';

import addImgSrcAndClass from './util/addImgSrcAndClass';
import addClassAndId from './util/addClassAndId';
import addClassAndHTML from './util/addClassAndHTML';

function renderThumbnails(arr) {
  const container = document.getElementById('container');

  products.groups.forEach((product, idx) => {
    let productDiv = document.createElement('div');
    let productImg = document.createElement('img');
    let productCarousel = document.createElement('div');
    let closeCarousel = document.createElement('div');
    let productName = document.createElement('h4');
    let productPrice = document.createElement('h6');

    productDiv.className += 'product-div';

    // Add hero img to product Div
    addImgSrcAndClass(productImg, 'hero-img', product.hero.href);
    // Set Attr to product carousel
    addClassAndId(productCarousel, 'carousel slide', `carousel-${idx}`);
    // Create exit carousel button
    addClassAndHTML(closeCarousel, 'exit', '<i class="fas fa-times"></i>');
    productCarousel.appendChild(closeCarousel);
    // Create product name
    addClassAndHTML(productName, 'product-name', product.name);
    // Create product price
    addClassAndHTML(productPrice, 'product-price', `$${product.priceRange.regular.high}`);

    // Create first image in carousel (thumbnail)
    let carouselInner = document.createElement('div');
    carouselInner.className += 'carousel-inner'; 
    let carouseItemActive = document.createElement('div');
    carouseItemActive.className += 'carousel-item active'; 
    let carouselImage = document.createElement('img');
    addImgSrcAndClass(carouselImage, 'd-block w-100', product.thumbnail.href);

    carouseItemActive.appendChild(carouselImage);
    carouselInner.appendChild(carouseItemActive);

    product.images.forEach((img, idx) => {
      // Create carousel image/item
      let carouseItemActive = document.createElement('div');
      carouseItemActive.className += 'carousel-item'; 
      let carouselImage = document.createElement('img');
      addImgSrcAndClass(carouselImage, 'd-block w-100', img.href); 

      carouseItemActive.appendChild(carouselImage)
      carouselInner.appendChild(carouseItemActive);
    });

    productCarousel.appendChild(carouselInner);

    // Add navigation buttons if needed
    if(product.images.length > 0) {
      let left = document.createElement('a');
      let right = document.createElement('a');
      let indicators = document.createElement('ol');

      left.innerHTML = '<i class="fas fa-angle-left"></i>';
      right.innerHTML = '<i class="fas fa-angle-right"></i>';
      left.href = `#carousel-${idx}`;
      left.className = 'left';
      left.setAttribute('data-slide', 'prev');
      left.setAttribute('role', 'button');
      right.href = `#carousel-${idx}`;
      right.className += 'right';
      right.setAttribute('data-slide', 'next');
      right.setAttribute('role', 'button');

      indicators.className += 'carousel-indicators';

      for(let i = 0; i < product.images.length + 1; i++) {
        let indicator = document.createElement('li');
        indicator.setAttribute('data-target', `#carousel-${idx}`);
        indicator.setAttribute('data-slide-to', i);
        if(i === 0) indicator.className += 'active';

        indicators.appendChild(indicator);
      };

      productCarousel.appendChild(left);
      productCarousel.appendChild(right);
      productCarousel.appendChild(indicators);
    }

    productDiv.appendChild(productName);
    productDiv.appendChild(productImg);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productCarousel);
    container.appendChild(productDiv);

    // Hide carousel by default
    productCarousel.style.display = 'none';

    productImg.onclick = function() {
      if(this.style.display !== 'none') {
        this.style.display = 'none';
        productPrice.style.display = 'none';
        productCarousel.style.display = 'block';
      }
    };

    closeCarousel.onclick = function() {
      if(this.style.nexSibling !== 'none') {
        productImg.style.display = 'block';
        productPrice.style.display = 'block';
        productCarousel.style.display = 'none';
      }
    };
  });
};

/**
  Render View
**/
const container = document.createElement('div');
container.id = 'container';
document.body.prepend(container);

renderThumbnails(products);