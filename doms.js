// DOM elements (nodes)

// get elementById()
// document refers to html page
// finds first element with that id
// const title = document.getElementById('title');
// console.log(title);

const title = document.querySelector('#title');
console.log(title);


// querySelector()
const containerDiv = document.querySelector('.container');
console.log(containerDiv);

const secondContainer = document.querySelector('.container-2');
console.log(secondContainer);

const pOne = document.querySelector('#one');
console.log(pOne);

const pTwo = document.querySelector('#two');
console.log(pTwo);

const pThree = document.querySelector('.three');
console.log(pThree);

const imgDiv = document.querySelector('.image');
console.log(imgDiv);

const divUlLi = document.querySelector('.listItem');
console.log(divUlLi);