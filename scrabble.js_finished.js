class Scrabble {
  constructor(word) {
    this.word = word ? word.toUpperCase() : "";
  }

  static letterValues = {
    "AEIOULNRST": 1,
    "DG": 2,
    "BCMP": 3,
    "FHVWY": 4,
    "K": 5,
    "JX": 8,
    "QZ": 10
  };

  score() {
    let totalScore = 0;
    for (let letter of this.word) {
      for (let letters in Scrabble.letterValues) {
        if (letters.includes(letter)) {
          totalScore += Scrabble.letterValues[letters];
          break;
        }
      }
    }
    return totalScore;
  }
}

export default Scrabble;
