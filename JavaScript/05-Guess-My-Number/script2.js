// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// // factorial in incremental way
// let n;
// n = parseInt(prompt('Enter Number : '));
// let ans = 1;
// for (let i = 1; i <= n; i++) {
//   ans *= i;
// }
// prompt('Factorial = ', ans);

// factorial in decremental way
// let n;
// n = parseInt(prompt('Enter Number : '));
// let ans = 1;
// for (let i = n; i >= 1; i--) {
//   ans *= i;
// }
// prompt('Factorial = ', ans);

// const again = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (score === 0) {
    document.querySelector('.message').textContent = 'Lost';
  } else if (guessedNumber === 0 || guessedNumber > 20 || guessedNumber < 1) {
    document.querySelector('.message').textContent = 'Enter Valid Number';
  } else if (guessedNumber === secretNumber) {
    console.log('equal');
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessedNumber > secretNumber) {
    document.querySelector('.message').textContent = 'High';
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = 'Low';
    document.querySelector('.score').textContent = --score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';

  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
