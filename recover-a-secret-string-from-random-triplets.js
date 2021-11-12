// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function (triplets) {
  const newArr = [];
  triplets.map((el, i) => {
    return el.map((_el) => newArr.push(_el));
  });
  newArr;
  let hash = {};

  for (const [i, num] of newArr.entries()) {
    hash[num] = hash[num] + 1 || 1;
  }

  hash;
  let arr = Object.keys(hash);

  // (23242422)
  arr;
};

// need to figure out how to check sort the values based on how they show up
// t > u > p > s > u > i > s
// w > h > i > h > s
// a > t > s > p
// h > i > a > p > s

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

// t > u > p    t > u > p > w > h > i > s > a
// w > h > i
// t > s > u
// a > t > s
// h > a > p
// t > i > s
// w > h > s

console.log(recoverSecret(triplets1), secret1);
