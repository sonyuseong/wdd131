function isCardNumberValid(number) {
  return number === "1234123412341234";
}
function displayError(msg) {
  document.querySelector(".errorMsg").innerHTML = msg;
}
function submitHandler(event) {
  event.preventDefault();
  let errorMsg = "";
  console.log(this.cardNumber.value);

  displayError("");

  if (isNaN(this.cardNumber.value)) {
    errorMsg += "Card number is not a valid number\n";
  } else if (!isCardNumberValid(this.cardNumber.value)) {
    errorMsg += "Card number is not a valid card number\n";
  }
  if (
    new Date() >
    new Date(
      parseInt("20" + this.expirationYY.value),
      this.expirationMM.value - 1
    )
  ) {
    errorMsg += "The card is expired";
  }
  console.log(errorMsg);
  console.log(
    new Date(
      parseInt("20" + this.expirationYY.value),
      this.expirationMM.value - 1
    )
  );
  if (errorMsg !== "") {
    displayError(errorMsg);
    return false;
  }
  return true;
}

document.querySelector("#theForm").addEventListener("submit", submitHandler);
