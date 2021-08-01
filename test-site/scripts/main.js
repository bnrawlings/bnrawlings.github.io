let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rio.jpeg') {
      myImage.setAttribute('src','images/rio12.jpeg');
    } else {
      myImage.setAttribute('src','images/rio.jpeg');
    }
}
let myButton = document.querySelector('button');myButton.onclick = function() {
    setUserName();
  }
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Reasons to vist RIO~,' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }