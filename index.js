
function dataUser() {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    idNumber = document.getElementById("idNumber").value;

    localStorage.setItem("username" , username)
    localStorage.setItem("email" , email)
    localStorage.setItem("idNumber" , idNumber)
    console.log(localStorage)  
    
    alert( "well done")
}


