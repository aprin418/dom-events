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

// getElementByClassName()
//.quesrySelectorAll()

const containerTwoList = document.getElementsByClassName('container-2'); //html collection
console.log(containerTwoList.item(3));

const containerTwoListTwo = document.querySelectorAll('.container-2'); //node list
console.log(containerTwoListTwo);

const containerTwoArray = Array.from(containerTwoList); //makes this an array
console.log(containerTwoArray);

for (let i = 0; i < containerTwoArray.length; i++) {
    let element = containerTwoArray[i];
    console.log(element);
};

const thirdElement = containerTwoArray[2];
console.log(thirdElement);

const pOne2 = document.querySelector('#one');
console.log(pOne2);
console.log(pOne2.textContent);
pOne2.textContent="GoodBye!";
console.log(pOne2.textContent);
pOne.textContent="French Vanilla";
console.log(pOne.textContent);
pTwo.textContent="rocky Road";
console.log(pTwo.textContent);
pThree.textContent="Chocolate, peanut butter, cookie dough";
console.log(pThree.textContent);
imgDiv.scr="https://i.imgur.com/r1w3fYq.jpg";
imgDiv.alt="scoop there it is";
console.log(imgDiv.textContent);
divUlLi.textContent="scoop there it is";
console.log(divUlLi.textContent);
// iceCreamImg = document.querySelector("image");
// iceCreamImg.scr = "https://i.imgur.com/r1w3fYq.jpg";
// console.log(iceCreamImg.src);

//creating elements
const newDiv = document.createElement('div');
console.log(newDiv);

newDiv.textContent = 'New Element';
// append something to page
//1. grab existing element off the page
//2. append new element to the page
const body = document.querySelector('body');
body.append(newDiv);

const newImg = document.createElement("img");
// newImg = document.querySelector('body');
newImg.src = "https://i.imgur.com/r1w3fYq.jpg";
body.append(newImg);

function addElement (ele) {
    const newEle = document.createElement(ele);
    body.append(newEle);
};


