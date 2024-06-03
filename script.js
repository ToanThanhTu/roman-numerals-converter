const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputArea = document.getElementById("output");
const result = document.getElementById("output-result");

const romanNumeralsMap = [
  {
    number: 1000,
    romanChar: "M"
  },
  {
    number: 900,
    romanChar: "CM"
  },
  {
    number: 500,
    romanChar: "D"
  },
  {
    number: 400,
    romanChar: "CD"
  },
  {
    number: 100,
    romanChar: "C"
  },
  {
    number: 90,
    romanChar: "XC"
  },
  {
    number: 50,
    romanChar: "L"
  },
  {
    number: 40,
    romanChar: "XL"
  },
  {
    number: 10,
    romanChar: "X"
  },
  {
    number: 9,
    romanChar: "IX"
  },  
  {
    number: 5,
    romanChar: "V"
  },
  {
    number: 4,
    romanChar: "IV"
  },
  {
    number: 1,
    romanChar: "I"
  }  
];

const convertRomanNumerals = (input) => {
  let romanNumerals = "";
  
  romanNumeralsMap.forEach((obj) => {
    while (obj.number <= input) {
      romanNumerals += obj.romanChar;
      input -= obj.number;
    }
  });

  return romanNumerals;
};

const displayError = (msg) => {
  result.textContent = msg;
  result.style.backgroundColor = "var(--bright-pink)";
  result.style.color = "var(--chocolate-cosmos)";
  outputArea.style.border = "solid 3px var(--chocolate-cosmos)";
  outputArea.style.display = "block";
};

const displayResult = (output) => {
  result.textContent = output;
  outputArea.style.display = "block";
  result.style.backgroundColor = "var(--dark-purple)";
  result.style.color = "white";
  outputArea.style.border = "solid 2px white";
};

const checkUserInput = () => {
  if (!inputNumber.value) {
    displayError("Please enter a valid number");
    return;
  }

  if (inputNumber.value < 1) {
    displayError("Please enter a number greater than or equal to 1");
    return;
  }

  if (inputNumber.value >= 4000) {
    displayError("Please enter a number less than or equal to 3999");
    return;
  }

  displayResult(convertRomanNumerals(inputNumber.value));  
};

convertBtn.addEventListener("click", checkUserInput);
