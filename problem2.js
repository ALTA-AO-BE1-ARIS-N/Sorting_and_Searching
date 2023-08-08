function playingDomino(hand, deck) {
    let suggestedCard = [];
    let maxSum = -1;
  
    for (const card of hand) {
      const [num1, num2] = card;
      if (num1 === deck[0] || num1 === deck[1]) {
        const sum = num1 + num2;
        if (sum > maxSum) {
          maxSum = sum;
          suggestedCard = card;
        }
      } else if (num2 === deck[0] || num2 === deck[1]) {
        const sum = num1 + num2;
        if (sum > maxSum) {
          maxSum = sum;
          suggestedCard = [num2, num1];
        }
      }
    }
  
    return suggestedCard;
  }
  
  const handCards1 = [[6, 5], [3, 4], [2, 1], [3, 3]];{
  const deckCards1 = [4, 3];
  console.log(playingDomino(handCards1, deckCards1)); // [3, 4]

  const handCards2 = [[6, 5], [3, 3], [3, 4], [2, 1]];
  const deckCards2 = [3, 6];
  console.log(playingDomino(handCards2, deckCards2)); // [6, 5]

  const handCards3 = [[6, 6], [2, 4], [3, 6]];
  const deckCards3 = [5, 1];
  console.log(playingDomino(handCards3, deckCards3)); // []
  }