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
  const averagez = document.querySelector('.averagez');

  const nameElements = persons.map((person) => {
    const element = document.createElement('li');
    element.innerText = person.name;
    return element;
  });
  const occupationElements = persons.map((person) => {
    const element = document.createElement('li');
    element.innerText = person.occupation;
    return element;
  });
  const priceElements = persons.map((person) => {
    const element = document.createElement('li');
    element.innerText = person.price;
    return element;
  });

  namez.replaceChildren(...nameElements);
  occupationz.replaceChildren(...occupationElements);
  pricez.replaceChildren(...priceElements);

  const averagePrice = calculatedAveragePrice();
  averagez.innerText =
    'The average starting price is $ ' + `${averagePrice.toFixed(2)}`;
}

function calculatedAveragePrice() {
  const total = persons.reduce((sum, person) => {
    const price = parseFloat(person.price.replace('$', ''));
    return sum + price;
  }, 0);
  return total / persons.length;
}

function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const name2 = names[Math.floor(Math.random() * names.length)];
  const name3 = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const occupation2 =
    occupations[Math.floor(Math.random() * occupations.length)];
  const occupation3 =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const price2 = prices[Math.floor(Math.random() * prices.length)];
  const price3 = prices[Math.floor(Math.random() * prices.length)];
  persons.pop();
  persons.pop();
  persons.pop();
  persons.push({ name: name, occupation, price });
  persons.push({ name: name2, occupation: occupation2, price: price2 });
  persons.push({ name: name3, occupation: occupation3, price: price3 });

  render();
}
