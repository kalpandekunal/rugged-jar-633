function checkData(){

    var enterEmail = document.getElementById("email").value;
    var enterPwd = document.getElementById("pwd").value;

    var getEmail = localStorage.getItem("userEmail");
    var getPwd = localStorage.getItem("userPwd");

    if(enterEmail == getEmail){
        if(enterPwd == getPwd){
            
            alert("Login Successful");
            
        }
        else{
            alert("wrong password");
        }
    }
    else{
        alert("Invalid details");
    }
}