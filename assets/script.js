// HTML elements 

const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsBanner = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');

// First banner 

let currentSlide = 0;  

// Left arrow 

leftArrow.addEventListener('click', () => {
    console.log('Left arrow clicked');

    if (currentSlide === 0) {                  
        currentSlide = slides.length - 1; 
    } else {
        currentSlide--;                       
    }
    updateCarousel();
    updateDots();
});

// Right arrow 

rightArrow.addEventListener('click', () => {
    console.log('Right arrow cliked');

    if (currentSlide === slides.length - 1) {       
        currentSlide = 0; 
    } else {
        currentSlide++;                             
    }
    updateCarousel();
    updateDots();
});

// Dots creation 

function createDots() {
                     
    slides.forEach((_, index) => {                    
        const dot = document.createElement('div');    
        dot.classList.add('dot');              

        if (index === 0) {                
            dot.classList.add('dot_selected');
        }

        dot.addEventListener('click', () => {     
            currentSlide = index;                    
            updateCarousel();
            updateDots();
        });

        dotsBanner.appendChild(dot);     
    });
}

// Dots update

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        
        dot.classList.toggle('dot_selected', index === currentSlide); 
    });
}

// Caroussel function image & text 

function updateCarousel() {
    
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;   
    bannerTagline.innerHTML = slides[currentSlide].tagLine; 
}
