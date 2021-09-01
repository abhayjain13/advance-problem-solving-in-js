function firstNonRepeat(string) {
  const map = {};
  let final = [];
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] in map)) {
      map[string[i]] = 1;
    } else {
      map[string[i]]++;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] === 1) {
      final.push(string[i]);
    }
  }
  return final;
}

const input = "Iamabhayjain";
const output = firstNonRepeat(input);
console.log(output);
