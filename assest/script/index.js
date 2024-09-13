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
setInterval(nextSlide, 7000);

// Show the first slide by default
showSlide(slideIndex);

window.addEventListener('load', function() {
    const captions = document.querySelectorAll('.main-caption');

    function typeEffect(element, text, speed) {
        let index = 0;
        element.textContent = ''; // Clear the element's text content

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 70);
            }
        }

        type();
    }

    captions.forEach(caption => {
        const h2Text = caption.querySelector('h2').textContent;
        const pText = caption.querySelector('p').textContent;
        caption.querySelector('h2').textContent = '';
        caption.querySelector('p').textContent = '';
        
        // Typing effect for h2 and p elements
        typeEffect(caption.querySelector('h2'), h2Text, 100);
        typeEffect(caption.querySelector('p'), pText, 50);
    });
});
