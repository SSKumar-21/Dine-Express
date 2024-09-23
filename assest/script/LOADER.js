// Add loading class to prevent scrolling
document.body.classList.add('loading');

// Create the loader div
const loader = document.createElement('div');
loader.id = 'loader';

// Create the video element
const video = document.createElement('video');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('loop', '');

// Add source to the video
const source = document.createElement('source');
source.src = './assest/image/pizza.mp4';  // Ensure this is the correct path to your video
source.type = 'video/mp4';

// Append the source to the video, and video to the loader
video.appendChild(source);
loader.appendChild(video);

// Append the loader to the body
document.body.appendChild(loader);

// Remove the loader when the page has fully loaded
window.addEventListener('load', function() {
    document.body.classList.remove('loading');
    document.body.removeChild(loader);
});
