import img from './assets/img.png';

const title = document.createElement('h3');
title.textContent = 'Webpack made easy';

const page = document.querySelector('body');
page.append(title);

const img = new Img();
img.src = img;
page.appendChild(img);
