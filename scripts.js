let counter = 0;

const buttons = document.querySelectorAll('.btn');

buttons[0].addEventListener('click', () => {
  counter--;
  displayCounter();
});

buttons[1].addEventListener('click', () => {
  counter = 0;
  displayCounter();
});

buttons[2].addEventListener('click', () => {
  counter++;
  displayCounter();
});

function displayCounter() {
  document.querySelector('.number').innerHTML = counter;
};