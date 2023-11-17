const imageBook = document.querySelector('#book__image');
const imagePc = document.querySelector('#pc__image');

imageBook.addEventListener('mouseover', changeImage);

function changeImage() {
   imageBook.animate(
        [
            { opacity: 0 },
        ],

        {
            duration: 1000,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
        },)

    imagePc.animate(
        [
            { opacity: 0.5 },
        ],

        {
            duration: 1000,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out',
            delay: 500,
        },)
}

const animationButton = document.querySelector('#animation__button');
const textOne = document.querySelector('.text__one')
const image = document.querySelector('.image__container')
const textTwo = document.querySelector('.text__two__container')

animationButton.addEventListener('click', showTextTwo);

function showTextTwo() {
    animationButton.style.display = 'none';
    textTwo.style.display = 'flex'

    textOne.animate(
        [
            { opacity: 0 },
        ],

        {
            duration: 1000,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
        },)

    image.animate(
        [
             { transform: 'translateX(53vw)' },
         ],
    
        {
            duration: 3000,
             iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
         },)

    textTwo.animate(
       [
           { opacity: 1 },
        ],

       {
           duration: 3000,
           iterations: 1,
           fill: 'forwards',
           easing: 'ease-in-out',
           delay: 1500,
       },)

}