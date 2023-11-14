const button = document.querySelector('#text__button');
const wave = document.querySelector('#water__wave')
const text = document.querySelector('.content')
const buttonStateTwo = document.querySelector('#state__two__button')

button.addEventListener('click', textReveal);
buttonStateTwo.addEventListener('click', textReveal);

function textReveal () {
    wave.animate(
        [
            { transform: 'translateX(25vw)'},
        ],

        {
            duration: 2000,
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'
        },
    )

    button.animate(
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