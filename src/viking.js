// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if ((this.health) >0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  

  battleCry(){
    return  "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if ((this.health) >0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  } 

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  cleanArray(array){
    return array.filter(el => el.health > 0);
  }

  getRandomElement (arr){
    let randomElement = arr[Math.floor((Math.random())*(arr.length))];
    return randomElement;
  }
  
  genericAttackMethod(attackingCharacter){
    let randomViking = this.getRandomElement(this.vikingArmy);
    let randomSaxon = this.getRandomElement(this.saxonArmy);
    if (attackingCharacter ===  "viking") {
      let result = randomSaxon.receiveDamage(randomViking.strength);      
      this.saxonArmy = this.cleanArray(this.saxonArmy);
      return result;      
    } else {
      let result = randomViking.receiveDamage(randomSaxon.strength);
      this.vikingArmy = this.cleanArray(this.vikingArmy);
      return result;
    }
  }

  vikingAttack(){
    return this.genericAttackMethod("viking");
  }
  
  saxonAttack (){
    return this.genericAttackMethod("saxon");
  }
  
  showStatus (){
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if  (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    } 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
