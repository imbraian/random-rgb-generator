// SELECT ELEMENTS
const redInput = document.getElementById('red')
const redText = document.getElementById('red-text')
const greenInput = document.getElementById('green')
const greenText = document.getElementById('green-text')
const blueInput = document.getElementById('blue')
const blueText = document.getElementById('blue-text')

// SELECT VALUE
let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;

// SELECT TEXT
redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

// CREATE A FUNCTION
function randomColor (red, green, blue) {
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgb;
}

// CHANGE RED
redInput.addEventListener('input', (e) => {
  red = e.target.value;
  redText.innerText = red;
  randomColor(red, green, blue); 
});

// CHANGE GREEN
greenInput.addEventListener('input', (e) => {
  green = e.target.value;
  greenText.innerText = green;
  randomColor(red, green, blue); 
});

// CHANGE BLUE
blueInput.addEventListener('input', (e) => {
  blue = e.target.value;
  blueText.innerText = blue;
  randomColor(red, green, blue); 
});