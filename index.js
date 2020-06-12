/*Carl wrote the below function to test to see if we can hit an end point. */
/*This has an anonymous function, thats why the function inside the parantheses*/
/*The .then makes the jS run asynchrousn instead of Syncrhones*/
// wait till HTML loads then run this { } JavaScript
// wait till HTML loads then run this { } JavaScript
document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('#search-button');
    let input = document.querySelector('#search-input');
    let pokePic = document.querySelector('#pokePic');
    let pokePic2 = document.querySelector('#pokePic2');
    button.addEventListener('click', function () {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/' + input.value)
        .then(function (result) {
          console.log(result.data.sprites.front_default);
          pokePic.src = result.data.sprites.front_default;
          pokePic2.src = result.data.sprites.back_default;
        })
    });
  });

//DUDE look at your CONSOLE.LOG for whats happening//