let nombre = document.getElementById('nombre');
let listatipo =  document.getElementById('tipo');
let listamove =  document.getElementById('move');
let hp =  document.getElementById('hp');
let attack =  document.getElementById('attack');
let defense =  document.getElementById('defense');
let specialattack =  document.getElementById('specialattack');
let specialdefense =  document.getElementById('specialdefense');
let speed =  document.getElementById('speed');

const datosPokeApi = () => {

    listatipo.innerHTML="";
    listamove.innerHTML="";

    let nombrePokemon = document.getElementById('pokeName').value;
    nombrePokemon = nombrePokemon.toLowerCase();
    let url =  `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    fetch(url).then((respuesta) =>{
        if (respuesta.status != "200") {
            cambiarImagen('./algosaliomal.jpg')
        }
        else {
            return respuesta.json();
        }
    }).then((data)=>{
        console.log(data);
        let pokemonImg = data.sprites.front_default;
        let arreglotipo =  data.types;
        let arreglomovimientos = data.moves;

        // MOSTRAR DATOS
        cambiarImagen(pokemonImg); 

        arreglotipo.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.type.name;
            listatipo.appendChild(li);
        });

        arreglomovimientos.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.move.name;
            listamove.appendChild(li);
        });
       
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialattack.textContent = data.stats[3].base_stat; 
        specialdefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

    })
    
}

function cambiarImagen(liga){
    let pokeImg = document.getElementById('imagenPokemon');
    pokeImg.src = liga;
}
