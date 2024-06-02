const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    wrapAround: true, // Adiciona wrap around para transições contínuas
    freeScroll: false, // Desativa o free scroll para melhor controle
    friction: 0.8, // Ajusta a fricção para suavizar a transição
    selectedAttraction: 0.025, // Ajusta a atração para suavizar a transição
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 50,
        x2: 62,
        y2: 48,
        x3: 18
    }
};

// Function to set background position for slides
function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization 
const carousel = document.querySelector('.carousel');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Event listener using bg position 
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});
