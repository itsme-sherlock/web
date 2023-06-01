"use strict";

let textArray = [];
let totalPersons = 0;

// clickEvent function
function clickedEvent(event) {
  //taking the input how many persons

  totalPersons = document.getElementById("no-of-persons").value;
  console.log(totalPersons);
  document.getElementById("no-of-persons").value = null;

  //1.getting the input from the drop down 1,2,and 3

  let roomsTwoShareSelected = document.getElementById("twoshare");
  let roomsThreeShareSelected = document.getElementById("threeshare");
  let roomsFourShareSelected = document.getElementById("fourshare");

  //2.getting the input from the food menu

  let foodMenu = Number(document.getElementById("food-id").value);

  //3.getting input from hotel check-in-out

  let checkIn = new Date(document.getElementById("check-in").value);
  let checkOut = new Date(document.getElementById("check-out").value);
  let totalNights = checkOut.getDate() - checkIn.getDate();
  console.log();
  if (checkIn > checkOut) {
    alert("Check in date cannot be greater than check out date");
  } else {
    //pushing the room share value to the array

    textArray.push(
      Number(
        roomsTwoShareSelected.options[roomsTwoShareSelected.selectedIndex].text
      )
    );
    textArray.push(
      Number(
        roomsThreeShareSelected.options[roomsThreeShareSelected.selectedIndex]
          .text
      )
    );
    textArray.push(
      Number(
        roomsFourShareSelected.options[roomsFourShareSelected.selectedIndex]
          .text
      )
    );

    calculateTheCost(textArray, foodMenu, totalNights);
  }
}

document.querySelector(".Submit").addEventListener("click", clickedEvent);

//calculating the cost
let sum = 0;
const foodCostArray = {
  0: [1400, 1600, 1900],
  1: [1800, 2200, 2700],
  2: [2200, 3000, 3800],
  3: [2700, 3500, 4000],
};

function calculateTheCost(textArray, foodMenu, totalNights) {
  for (const [index, val] of textArray.entries()) {
    //note:foodCostArray[foodMenu] means you are calling the object foodcostArray
    console.log(foodCostArray[foodMenu][index] * val);
    sum += foodCostArray[foodMenu][index] * val;
  }
  //displaying the result
  sum=sum*totalNights;
  console.log("sum: " + sum);
  document.getElementById(
    "result"
  ).textContent = ` The Cost of your Customised Package is Rs ${sum}`;
}
