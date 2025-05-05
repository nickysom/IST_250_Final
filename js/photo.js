// A script that forces all the images to load before the page starts

// Path file to all the jpegs
const photoPaths = [
    'images/cheddar_one.jpeg',
    'images/cheddar_three.jpeg',
    'images/jello_one.jpeg',
    'images/jello_two.jpeg',
    'images/jello_three.jpeg',
    'images/jello_four.jpeg',
    'images/erin_one.jpeg',
    'images/cheddar_two.jpeg',
    'images/erin_two.jpeg',
    'images/erin_three.jpeg',
    'images/erin_four.jpeg',
    'images/sky_one.jpeg',
    'images/sky_two.jpeg',
    'images/sky_three.jpeg'
];

// Preloads all the images before there put onto the page
photoPaths.forEach(src => {
    const img = new Image();
    img.src = src;
});
// Waits for the page to finish loading
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
});

