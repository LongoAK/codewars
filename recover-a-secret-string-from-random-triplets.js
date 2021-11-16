// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function (triplets) {
  let letters = {};

  for (const trip of triplets) {
    trip.map((el, i) => {
      if (!letters[el]) {
        letters[el] = trip.slice(i + 1);
      } else {
        letters[el] = letters[el].concat(trip.slice(i + 1));
      }
    });
  }

  return Object.entries(letters)
    .sort((a, b) => {
      return b[1]
        .map((letter) => letter === a[0])
        .some((check) => check === true)
        ? 0
        : -1;
    })
    .map((item) => item[0])
    .join("");
};

secret1 = "whatisup";
triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

console.log(recoverSecret(triplets1), secret1);
