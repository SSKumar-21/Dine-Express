let slideIndex = 0;
let slides = document.querySelectorAll('.main-item'); // will return the array of no. of item/img
let dots = document.querySelectorAll('.dot'); // will return the array of no. of dots
let totalSlides = slides.length; // getting the length of slides or no. of slides

// Function to show the current slide
function showSlide(index) {
  if (index >= totalSlides) {
    slideIndex = 0;  // Reset to first slide if index exceeds total slides
  }
  if (index < 0) {
    slideIndex = totalSlides - 1; // Go to last slide when moving backwards from the first
  }
  document.querySelector('.main-images').style.transform = 'translateX(-' + (slideIndex * 100) + '%)';

  dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
  dots[slideIndex].classList.add('active'); // Set active dot
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Function to set a specific slide
function setSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 4000);

// Show the first slide by default
showSlide(slideIndex);