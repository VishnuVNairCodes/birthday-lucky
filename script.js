"use strict";

const dateOfBirthEntered = document.querySelector(".date-of-birth");
const luckyNumberEntered = document.querySelector(".lucky-number");
const btnCheck = document.querySelector(".btn-check");
const messageToUser = document.querySelector(".message-to-user");

function removeHyphen(dateOfBirth) {
  let dateOfBirthWithoutHyphen = "";
  for (let i = 0; i < dateOfBirth.length; i++) {
    if (dateOfBirth.charAt(i) !== "-") {
      dateOfBirthWithoutHyphen += dateOfBirth.charAt(i);
    }
  }
  return dateOfBirthWithoutHyphen;
}

function sumOfDateDigits(dateOfBirth) {
  let sum = 0;
  for (let i = 0; i < dateOfBirth.length; i++) {
    sum += Number(dateOfBirth.charAt(i));
  }
  return sum;
}

function msgBirthDateIsLucky(luckyNumber) {
  return luckyNumber + " is a lucky number!! 🎉🎉";
}

function msgBirthDateIsNotLucky(luckyNumber) {
  return luckyNumber + " is not that lucky 💔";
}

const msgEnterBothFields = "Please enter both fields";

function isBirthDateLucky(dateOfBirth, luckyNumber) {
  if (dateOfBirthEntered.value && luckyNumberEntered.value) {
    if (sumOfDateDigits(removeHyphen(dateOfBirth)) % luckyNumber === 0) {
      return msgBirthDateIsLucky(luckyNumber);
    }
    return msgBirthDateIsNotLucky(luckyNumber);
  }
  return msgEnterBothFields;
}

messageToUser.innerText = "A";

btnCheck.addEventListener("click", function () {
  messageToUser.classList.remove("make-footer-stay-at-bottom");
  messageToUser.innerText = isBirthDateLucky(
    dateOfBirthEntered.value,
    luckyNumberEntered.value
  );
});
