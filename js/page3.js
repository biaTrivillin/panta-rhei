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