/*Basic function for novices to learn JS*/
function hello () {
    console.log ('Hello sir')
}

/*Carl wrote the below function to test to see if we can hit an end point. */
/*This has an anonymous function, thats why the function inside the parantheses*/
/*The .then makes the jS run asynchrousn instead of Syncrhones*/
document.addEventListener('DOMContentLoaded', function(){
    axios.get('http://beer-me-python-backend.herokuapp.com/beers').then(function(result) {
        console.log(result.data)
        
        // select beer image source
        let beerImg = result.data[0].beer_label
        
        // create img HTML element
        let beer = document.createElement('img')
        
        // add image source to img element
        beer.src = beerImg
        
        // append image to docuemtn body
        document.body.appendChild(beer)
    })
})

