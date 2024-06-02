const options = {
    acessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 1,
        x1: 58,
        x2: 62,
        x3: 55,
        y2: 48,
        x3: 18
    }
};

// Function to set background position forr slides
function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides(index).style.backgroundPosition = '${x}px'
}

// Slides initialization 
const carousel = document.querySelector('[carousel]')
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new flickity(carousel, options);

// Event listener using bg position 
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});