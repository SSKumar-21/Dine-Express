let x = Math.floor(Math.random() * 100);

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; 
let day = currentDate.getDate();
let hour = currentDate.getHours();

let order = year * month * day * hour + x;


function generateOrderNumber() {
    let x = Math.floor(Math.random() * 10);
    order+=x;
    document.getElementById("order-count").innerText = `Order Count: ${order}+`;
}

// Call the function to generate the order number every second (1000ms)
setInterval(generateOrderNumber, 1000);

// Also generate the order number once when the site first loads
window.onload = generateOrderNumber;







const reviews = [
    "The food was amazing and delivery was quick!",
    "Delicious and fresh, loved every bite!",
    "Best delivery service I've experienced.",
    "The biryani was to die for!",
    "Fast service and great taste.",
    "Absolutely loved the paneer tikka!",
    "Samosas were crispy and delightful.",
    "Gulab jamun was heavenly!",
    "Fantastic flavors and prompt delivery.",
    "Will definitely order again!",
    "The delivery was quicker than expected.",
    "Highly recommend the dal makhani.",
    "Perfectly spiced food that hit the spot.",
    "Great variety on the menu!",
    "So many delicious options to choose from.",
    "Loved the packaging, it was neat!",
    "The service was exceptional.",
    "A delightful experience overall.",
    "The food was hot and fresh upon arrival.",
    "Great portion sizes for the price.",
    "They really know how to spice it right!",
    "Fantastic vegetarian options!",
    "The delivery person was very polite.",
    "I'm in love with the butter chicken.",
    "Every meal has been consistently good.",
    "The restaurant has become my go-to for delivery.",
    "Very satisfied with my order today!",
    "The flavors were authentic and rich.",
    "The salads were fresh and crunchy.",
    "I enjoyed the quick turnaround time.",
    "The best Indian food I've had in a while!",
    "I was impressed with the overall quality.",
    "The naan was soft and fluffy.",
    "The spice level was just right for me.",
    "The variety of desserts was a pleasant surprise.",
    "I appreciate the eco-friendly packaging.",
    "The food exceeded my expectations!",
    "Great experience from start to finish.",
    "I can't stop thinking about the korma.",
    "I love supporting local businesses like this.",
    "The curry was rich and flavorful.",
    "Everything tasted homemade and fresh.",
    "The delivery tracking was very helpful.",
    "So many options for food lovers!",
    "My family loved every dish we ordered.",
    "The chef knows how to balance flavors.",
    "The raita complemented the meal perfectly.",
    "Great for family gatherings and parties.",
    "They offer generous servings!",
    "The chutneys were a delightful addition.",
    "The samosas were the best I've ever had.",
    "Can't wait to try more items on the menu.",
    "Every meal has been a hit with my friends.",
    "I appreciate the punctuality of the service.",
    "The rice was fluffy and perfectly cooked.",
    "I highly recommend the veggie platter.",
    "Delicious and fulfilling meal!",
    "The food brought back fond memories of home."
];

function updateReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    document.getElementById("Reviews").innerText = reviews[randomIndex];
}

// Update review every 5 seconds
setInterval(updateReview, 3000);
