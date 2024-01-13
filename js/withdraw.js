document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawField.value);
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal
    const balanceTotal = document.getElementById("total-balance")
    const previousBalanceTotal = parseFloat(balanceTotal.innerText)
    const currentBalance = previousBalanceTotal - newWithdrawAmount
    balanceTotal.innerText = currentBalance

    withdrawField.value = ''
})
