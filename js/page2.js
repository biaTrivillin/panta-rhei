$(function () {
    $('.gooey span').draggable();
} )

const buttonChange = document.querySelector('#button__change');

buttonChange.addEventListener('click', changePage);

function changePage() {
    window.location.href = '../html/page3.html'
}