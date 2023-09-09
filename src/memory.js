class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards) {
      for (let i=this.cards.length-1; i >= 1; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp
      }
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length/2) return true
    return false
  }
}
