let myPokemon = {
		name: "Ash Ketchum",
		age: 10,
		pokemon:["Pikachu", "Charizard", "Squirtle", "Bulbasaur"],
		friends:{
			hoenn: ["May", "Max"],
			kanto: ["Brock", "Misty"]
		},
		talk: function(){
			 console.log("Pikachu! I chose you!");
			}
	}
	console.log(myPokemon);
	console.log("Result of dot notation: ")
	console.log(myPokemon.name);
	console.log("Result of square bracket notation: ");
	console.log(myPokemon.pokemon);
	console.log("Result of talk method ");
	myPokemon.talk();

function Pokemon(name, level, health, attack){
	this.name = name;
	this.level = level * 2; 
	this.health = level * 4;
	this.attack = level * 2;
	
	this.tackle = function(targetPokemon){
					
		console.log(this.name+ " tackled " +targetPokemon.name);
	}
}

let pikachu = new Pokemon("Pikachu", 6);
console.log(pikachu);

let geodude = new Pokemon("Geodude", 4);
console.log(geodude);

let mewtwo = new Pokemon("Mewtwo", 50);
console.log(mewtwo);

geodude.tackle(pikachu);

let newTargetHealth = pikachu.health - geodude.attack;
function printPokemon(targetPokemon){
		if(true){
			console.log("Pikachu health's is now reduced to " +newTargetHealth) 
		}
		}
		printPokemon();