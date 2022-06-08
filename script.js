let trainer = {
		name: "Ash Ketchum",
		age: 10,
		pokemon:["Pikachu", "Charizard", "Squirtle", "Bulbasaur"],
		friends:{
			hoenn: ["May", "Max"],
			kanto: ["Brock", "Misty"]
		},
			talk: function(){
	 		console.log(this.pokemon[0] + " I choose you!")
	 		
	 	}
	}
	console.log(trainer);
	console.log("Result of dot notation: ")
	console.log(trainer.name);
	console.log("Result of square bracket notation: ");
	console.log(trainer.pokemon);
	console.log("Result of talk method ");
	trainer.talk();

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


pikachu.health -= geodude.attack;
	if(pikachu.health <= 0){
		pikachu.faint();
	}
	else{
		console.log(pikachu.name + "'s health is now reduced to " + pikachu.health);
	}

this.faint = function(){
	console.log(this.name + " fainted ");
	}