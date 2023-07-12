for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const cards =[ 'Guadalupe', 'Ollie', 'Aki' ];

function writeCards(cards, event) {
  let newArray = []  
  for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

console.log(writeCards(cards, "Birthday"));

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown();