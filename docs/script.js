let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btn");

//making an array of our buttons and storing them in buttonArray
const buttonArray = Array.from (buttons);

// function creation for square and percentage calculation
const percentage = () => {
  return entry = entry/100;
};
const square = () => {
  return entry = entry ** 2;
};

let entry = ""; // this empty string will take the values from user 
// function part
buttonArray.forEach((btn) => {
  btn.addEventListener ('click', (e) => {
    if (e.target.innerHTML == "=") {
      entry = eval (entry); // eval function is an inbuild JavaScript function which evalutaes everything
      result.value = entry;
    } else if (e.target.innerHTML == "AC") {
      entry = "";
      result.value = entry;
    } else if (e.target.innerHTML == "DEL") {
      entry = entry.substring (0, entry.length-1);
      result.value = entry;
    } else if (e.target.innerHTML == "%") {
      percentage ();
      result.value = entry;
    } else if (e.target.innerHTML == "x<sup>2</sup>") {
      square ();
      result.value = entry;
    } else {
      entry += e.target.innerHTML;
      result.value = entry;
    }
  });
});