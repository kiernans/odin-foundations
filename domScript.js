const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = `Hey I'm red!`;
paragraph.style.color = 'red';

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = `I'm a blue h3!`;
h3.style.color = 'blue';

container.appendChild(paragraph);
container.appendChild(h3);

const divider = document.createElement('div');
divider.classList.add('divider');
divider.setAttribute('style', 'background-color: pink; border-style: solid; border-color: black;');

const h1 = document.createElement('h1');
h1.textContent = `I'm in a div`;

const paragraph2 = document.createElement('p');
paragraph2.textContent = `ME TOO!`;


divider.appendChild(h1);
divider.appendChild(paragraph2);
container.appendChild(divider);






