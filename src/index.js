import './main.scss';

const btnPrev = document.querySelector('.btn-prev-container');
const btnNext = document.querySelector('.btn-next-container');

const text = document.querySelectorAll('.testimonial__text');
const person = document.querySelectorAll('.testimonial__person');
const image = document.querySelectorAll('.testimonial__image');

btnPrev.addEventListener('click', () => {
  image[0].classList.remove('hide');
  image[0].classList.add('animated-image');
  image[1].classList.add('hide');
  person[0].classList.remove('hide');
  person[0].classList.add('animated-person');
  person[1].classList.add('hide');
  text[0].classList.remove('hide');
  text[0].classList.add('animated-text');
  text[1].classList.add('hide');
}, false);


btnNext.addEventListener('click', () => {
  image[1].classList.remove('hide');
  image[1].classList.add('animated-image');
  image[0].classList.add('hide');
  person[1].classList.remove('hide');
  person[1].classList.add('animated-person');
  person[0].classList.add('hide');
  text[1].classList.remove('hide');
  text[1].classList.add('animated-text');
  text[0].classList.add('hide');
}, false);