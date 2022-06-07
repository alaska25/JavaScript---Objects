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
	// console.log("Result of square bracket notation: " +myPokemon["name"]);
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
	// method
	this.tackle = function(targetPokemon){
					
		console.log(this.name+ " tackled " +targetPokemon.name);
	}
}


// 9.
let pikachu = new Pokemon("Pikachu", 6);
console.log(pikachu);

let geodude = new Pokemon("Geodude", 4);
console.log(geodude);

let mewtwo = new Pokemon("Mewtwo", 50);
console.log(mewtwo);

geodude.tackle(pikachu);

// 10. Create a tackle method that will subtract the health property of the target pokemon object with the attack property of the object that used the tackle method.

let newTargetHealth = pikachu.health - geodude.attack;
function printPokemon(targetPokemon){
		if(true){
			console.log("Pikachu health's is now reduced to " +newTargetHealth) 
		}
		}
		printPokemon();



			


// 11. Create a faint method that will print out a message of targetPokemon has fainted.
// this.faint = function(){
// 		console.log(this.name+ " fainted ");

// this.tackle = function(pikachu){
// 					//pokemonObject
// 		console.log("Pikachu's health is now reduced to " +this.health);
// }