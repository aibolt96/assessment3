var restaurants = ['Waka House', 'Our Moms', 'Louies Cafe', 'Drunken Fish', 'Mike Andersons', 'McDonalds']
var recommendRestaurants = document.getElementById('recommendRestaurant')

function recommend(){
    let randomIndex = Math.floor(Math.random() * restaurants.length);
    let restaurant = restaurants[randomIndex]
    alert('Recommended Restaurant: ' + restaurant)
}

recommendRestaurants.addEventListener('click', recommend)