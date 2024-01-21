function beerType(beer) {
    let counter = document.createElement('li');
    counter.className = "counter";
    counter.innerHTML =
        `<img src="${beer.image_url}">
    <div class="content"> 
        <h4>${beer.name}</h4>  
        <p>${beer.description}</p>
        <br>
        <p> ${beer.reviews}</p></br>
        <div class="reviews-container"></div>
    </div>
    <div>
        <input type="text" placeholder="Enter your review" class="review-input">
        <button class="update-button">Update beer</button>
        <button class="review-button">Submit review</button>
    </div>`;
    document.querySelector('#beerType').appendChild(counter);
    const reviewButton = counter.querySelector('.review-button');
    reviewButton.addEventListener('click', function () {
    
        const reviewInput = counter.querySelector('.review-input');
        const reviewText = reviewInput.value;
        if (reviewText.trim() !== '') {
            
        const newReview = document.createElement('div');
        newReview.classList.add('review');

        const reviewTextElement = document.createElement('p');
        reviewTextElement.textContent = reviewText;
   
        newReview.appendChild(reviewTextElement);    
        counter.querySelector('.reviews-container').appendChild(newReview);
            reviewInput.value = '';

        }
    });
}

function getAllBeers(){
    fetch('http://localhost:3000/')
    .then( res => res.json())
    .then(beers.forEach(beer => beerType(beer)))
    
    }
    getAllBeers()
function sample(){
    //beers.forEach(beer => beerType(beer))
}
sample()