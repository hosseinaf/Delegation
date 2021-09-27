// Delegation

const coursesList = document.querySelector('#courses-list');
coursesList.addEventListener('click', function(e){
    if(e.target.classList.contains('add-to-cart')){
        console.log(e.target)
    }
})

// Stop propagation


// const card = document.querySelector('.card')
// const infoCard = document.querySelector('.info-card')
// const addToCart = document.querySelector('.add-to-cart')


// card.addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('you Click the card')
// })

// infoCard.addEventListener('click', function(e){
//     console.log('you Click the infoCard')
//     e.stopPropagation()

// })

// addToCart.addEventListener('click', function(e){
//     console.log('you Click the addToCart')
//     e.stopPropagation()

// })