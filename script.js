// console.log("Hello World");

// 3. Create a trainer object using object literals.
let myPokemon = {
		name: "Pikachu",
		level: 3,
		health: 100,
		attack: 50,
		tackle: function(){
			console.log("This pokemon tackled targetpokemon ");
			console.log("targetPokemon is reduced to newTargetPokemonHealth");
		},
		faint: function(){
			console.log("Pokemon fainted");
		}
	}
	console.log(myPokemon);
	// myPokemon.faint();

/*
	Object Constructor Notaion
*/
function Pokemon(name, level){
	this.name = name;
	this.level = level * 2; 
	this.attack = level;
	// method
	this.tackle = function(targetPokemon){
					//pokemonObject
		console.log(this.name+ " tackled " +targetPokemon.name);

		 // targetHealth  - pokemonAttack = newHealth
		 // 16 - 16 = 0
		console.log("targetPokemon is reduced to newTargetPokemonHealth");

		// Call faint method if the target pokemon's health is less than or equal to zero.
		targetPokemon.faint();
	} 
	this.faint = function(){
		console.log(this.name+ " fainted ");
	}
}

let pikachu = new Pokemon("Pikachu", 16);
console.log(pikachu);
/*
	health = 32
	level = 16
*/
let rattata = new Pokemon("Rattata", 8);
console.log(rattata);
  
// pikachu.tackle(rattata);
rattata.tackle(pikachu);
