let counter = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerText === "Decrease") {
      counter--;
      displayCounter();
    } else if (button.innerText === "Reset") {
      counter = 0;
      displayCounter();
    } else {
      counter++;
      displayCounter();
    }
  });
});

function displayCounter() {
  document.querySelector('.number').innerHTML = counter;
};