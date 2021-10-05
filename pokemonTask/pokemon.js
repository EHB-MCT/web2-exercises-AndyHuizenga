'use strict'

 class Pokemon {
    constructor(name, elements, img) {
        this.name = name;
         this.elements = elements;
         this.img = img;
    }
 }


const fetchpoke = fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => console.log(data))


console.log(fetchpoke.results.name)