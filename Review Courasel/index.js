// Local Reviews
const reviews = [
    {
        src: "/images/chef3.jpg",
        reviewer: "michelle obama",
        review: "Gripping thriller with unexpected twists; 'The Silent Echo' keeps you guessing until the final page."
    },
    {
        src: "/images/chef4.jpg",
        reviewer: "john james",
        review: "Heartwarming tale of friendship and courage; 'Sunrise Bonds' is a captivating journey of self-discovery."
    },
    {
        src: "/images/chef6.jpg",
        reviewer: "malika zawadi",
        review: "Thought-provoking sci-fi exploration; 'Beyond Tomorrow' combines stunning visuals with a compelling narrative about the future."
    },
    {
        src: "/images/chef2.jpg",
        reviewer: "prince nabanji",
        review: "The best ambience for the perfect dining spot in the country together with the perfect dishes and drinks to accompay it."
    }
]


//Select Items
const reviewerImage = document.getElementById("reviewer-image");
const reviewerName = document.getElementById("reviewer");
const review = document.getElementById("review");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const randomBtn = document.getElementById("surprise");

//Set starting item
let currentItem = 0;

//Setting the next button
nextBtn.addEventListener("click", () => {
    currentItem = currentItem + 1;
    if (currentItem === reviews.length) {
        currentItem = 0;
    }
    reviewerName.textContent = reviews[currentItem].reviewer;
    reviewerImage.src = reviews[currentItem].src;
    review.textContent = reviews[currentItem].review;
})


//Setting the previous button
prevBtn.addEventListener("click", () => {
    currentItem = currentItem - 1;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    reviewerName.textContent = reviews[currentItem].reviewer;
    reviewerImage.src = reviews[currentItem].src;
    review.textContent = reviews[currentItem].review;
})


//Setting the randomization button
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    reviewerName.textContent = reviews[currentItem].reviewer;
    reviewerImage.src = reviews[currentItem].src;
    review.textContent = reviews[currentItem].review;
})





