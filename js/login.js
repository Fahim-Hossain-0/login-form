document.getElementById("submit").addEventListener('click',function(){
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    const passwoardFild = document.getElementById('user-password');
    const password = passwoardFild.value;
    if(email === "modelian@gmail.com" && password === "april01"){
        // console.log("user varlid")
        window.location.href = 'balance.html'
    }
    else{
        console.log("invalid")
    }
})