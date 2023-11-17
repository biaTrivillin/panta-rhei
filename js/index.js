const buttonTxt = document.querySelector('#text__button');
const buttonNxt = document.querySelector('#next__button');
const wave = document.querySelector('#water__wave')
const text = document.querySelector('.content')
// const buttonStateTwo = document.querySelector('#state__two__button')

buttonTxt.addEventListener('click', textReveal);
// buttonStateTwo.addEventListener('click', textReveal);

function changePage () {
    window.location.href = '../html/index.html'
}

function textReveal () {

    wave.animate(
        [
            { transform: 'translateX(28vw)'},
        ],

        {
            duration: 2000,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
        },
    )

    buttonTxt.animate(
        [   
            { opacity: 0},
        ],

        {
            duration: 100,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
        },
    )

    buttonNxt.animate(
        [   
            { transform: 'translateX(-19vw)'},
        ],

        {
            duration: 2000,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
        },
    )

    text.animate(
            [
                { opacity: 1},
            ],
    
            {   
                duration: 2000,
                iterations: 1,
                fill: 'forwards',
                delay: 1000,
                easing: 'ease-in-out'
            },
    )
    
}