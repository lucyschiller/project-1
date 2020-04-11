// jshint esversion: 7

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = (); {
  let target,
    die1,
    die2,
    rollCount = 0,
    die1URL,
    die2URL,
    imgElem1, cheeryMsg;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    // roll the dice
    die1 = 4;
    die2 = 5;

    console.log(`d1 = ${die1} d2 = ${die2}`);

  } while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);


  for (var i = 0; i < rollCount.length; i++) {
    rollCount[i];
  }
  
  cheeryMsg = `You hit your number in ${rollCount} rolls!`

  //Register the controller after the DOM is complete
  window.addEventListener("load", function() {
    //select the button
    let button = document.querySelector("button");

    //register the click handler for the button
    button.addEventListener("click", controller);
  });
}
