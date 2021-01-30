let total = 20;
const numbers = [];
const maxValue = 100;

while (total > 0) {
  const number = Math.floor(Math.random() * maxValue);
  if (!numbers.includes(number)) {
    numbers.push(number)
    total -= 1
  }
}

console.log(numbers)