'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    score++;
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈Too high!';
    score--;
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📉Too low!';
    score--;
  }
  console.log(score);
  document.querySelector('.score').textContent = score;
});
