const salaryAInput = document.querySelector("#salaryA"),
  salaryBInput = document.querySelector("#salaryB"),
  amountInput = document.querySelector("#amount");

const aResult = document.querySelector("#aShouldPay"),
  bResult = document.querySelector("#bShouldPay"),
  result = document.querySelector("#result");

const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  const salaryA = parseInt(salaryAInput.value),
    salaryB = parseInt(salaryBInput.value),
    amount = parseInt(amountInput.value);
  //check inputs
  if (!salaryA || !salaryB || !amount) {
    //hide results
    result.style.visibility = "hidden";
    result.style.opacity = "0";
    return;
  }
  const values = calculateAmount(salaryA, salaryB, amount);

  //add results
  aResult.innerText = values.aShouldPay.toFixed(2);
  bResult.innerText = values.bShouldPay.toFixed(2);

  //show results
  result.style.visibility = "visible";
  result.style.opacity = "1";
});

function calculateAmount(salaryA, salaryB, amount) {
  const salaryARatio = salaryA / (salaryA + salaryB);
  const salaryBRatio = 1 - salaryARatio;

  return {
    aShouldPay: salaryARatio * amount,
    bShouldPay: salaryBRatio * amount,
  };
}
