+function validate(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value

    // Gaperlu kasih .value karena bukan typing
    const male = document.getElementById("male")
    const female = document.getElementById("female")
    const agreement = document.getElementById("agreement")
    //console.log(username)


    if(username.length < 5){
        // alert("Username must be at least 5 characters long")
        document.getElementById("error").innerHTML = "Username must be at least 5 characters long<br>" //->Cara show error yang beda
    }
    else if (!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
    }
    else if (isAlphaNum(password)==false){
        alert("Your password must contain 1 alphabet and 1 number")
    }
    else if (age < 13){
        alert ("You must be at least 13 years old")
    }
    else if (!male.checked && !female.checked){
        alert ("You must select at least one gender")
    }
    else if(!agreement.checked){
        alert ("You must agree with our terms and conditions")
    }
}

function isAlphaNum(password){
    var isAlpha = false
    var isNum = false 

    for (let i = 0;i<password.length;i++){
        if(isNaN(password[i])){  //isNaN -> is Not a Number
            isAlpha = true
        }
        else isNum = true 
    }
    if(isAlpha == false || isNum == false) return false
    return true
}