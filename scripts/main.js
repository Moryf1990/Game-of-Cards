//Part 1 -1
function PlayingCard(value, suit) {
    this.value = value || 'ace'
    this.suit = suit || 'spades'
}
var myCard = new PlayingCard('jack', 'diamonds');
var yourValue = prompt('What value would you like?')
var yourSuit = prompt('What suit is your card?');


console.log('Your card is the '+yourValue+' of '+yourSuit+'.');







// Part1 - 2
function PlayingCards(suit, value) {
    this.suit = suit;
    this.value = value;
}
var myPlayingCards = new PlayingCards('hearts', '10');
console.log(myPlayingCards);









//Part 2
function GamblingDie() {
    this.dieValue = [1, 2, 3, 4, 5, 6];
    this.roll = function() {
        var randomRoll = Math.ceil(Math.random()* this.dieValue.length);
        // console.log(randomRoll+' is the current die value');
        var myRoll = prompt('Type "roll" to roll the dice');
        if (myRoll === 'roll') {
        	document.write(randomRoll+' is the current die value');
    	} else {
    		document.write('You need to type in "roll".');
    	}
        return randomRoll;
    }
}

var myDie = new GamblingDie();
myDie.roll();












//Part 3
var dice1 = {}; 
var dice2 = {};
for (var i = 0; i < 1000; i++) {
	var dieValue1 = [1, 2, 3, 4, 5, 6];
	
	var randomRoll1 = Math.ceil(Math.random()*dieValue1.length);
	

	if(randomRoll1 in dice1) {
		dice1[randomRoll1]++;
	}
	else {
		dice1[randomRoll1] = 1;
	}
}

console.log(dice1);

for(var i = 0; i<1000; i++) {
	var dieValue2 = [7, 8, 9, 10, 11, 12];
	var randomRoll2 = Math.ceil(Math.random()*dieValue2.length);

	if(randomRoll2 in dice2) {
		dice2[randomRoll2]++;
	}
	else {
		dice2[randomRoll2] = 1;
	}
}

console.log(dice2);






















