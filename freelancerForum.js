const names = ['Alice', 'John', 'Jill', 'Tommy', 'Ashe', 'Tim'];
const occupations = [
  'Carpenter',
  'Scientist',
  'Janitor',
  'Teacher',
  'Astronaut',
  'Librarian',
];
const prices = ['$70', '$200', '$90', '$270', '$130', '$40'];
const maxPersons = 3;
const average = [];
const persons = [
  {
    name: 'Alice',
    occupation: 'Carpenter',
    price: '$70',
  },
  {
    name: 'John',
    occupation: 'Scientist',
    price: '$200',
  },
  {
    name: 'Jill',
    occupation: 'Janitor',
    price: '$90',
  },
];

const changePersonIntervalId = setInterval(addPerson, 10000);
render();
function render() {
  const namez = document.querySelector('.namez');
  const occupationz = document.querySelector('.occupationz');
  const pricez = document.querySelector('.pricez');

  const nameElements = persons.map((person) => {
    const element = document.createElement('li');
    element.classList.add(person.name, person.occupation, person.price);
    return element;
  });
  const occupationElements = persons.map((person) => {
    const element = document.createElement('li');
    element.classList.add(person.name, person.occupation, person.price);
    return element;
  });
  const priceElements = persons.map((person) => {
    const element = document.createElement('li');
    element.classList.add(person.name, person.occupation, person.price);
    return element;
  });
  namez.replaceChildren(...nameElements);
  occupationz.replaceChildren(...occupationElements);
  pricez.replaceChildren(...priceElements);
}

function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  persons.push({ name, occupation, price });

  render();

  if (persons.length >= maxPersons) {
    clearInterval(changePersonIntervalId);
  }
}
