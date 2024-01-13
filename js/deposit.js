document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositFild = document.getElementById("deposit-field");

  const nweDepositAmount = parseFloat(depositFild.value);

  const depositTotalElement = document.getElementById("deposit-total");

  const previousDepositTotal = parseFloat(depositTotalElement.innerText);

  const currentDepositTotal = previousDepositTotal + nweDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("total-balance");

  const balanceTotal = parseFloat(balanceTotalElement.innerText);

  const currentBalance = balanceTotal + nweDepositAmount;

  balanceTotalElement.innerText = currentBalance;

  depositFild.value = "";
});
