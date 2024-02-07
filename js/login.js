

var getMail = document.getElementById('emailinput')
var getpass = document.getElementById('passinput')
var regName = document.getElementById('regname')
var regEmail = document.getElementById('regemail')
var regPass = document.getElementById('regpass')
var signup = document.getElementById('signup')
var signin = document.getElementById('signin')
var regsignup = document.getElementById('regsignup')
var login = document.getElementById('login')
var reg = document.getElementById('reg')
var registerBtn = document.getElementById("registerBtn");
var btnLogin = document.getElementById('btnlogin')
var home = document.getElementById('home')
var logout = document.getElementById('logout')

var users;

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
}
else {
    users = []

}


signup.addEventListener("click", function () {
    reg.classList.replace("d-none", "d-flex");
    login.classList.replace("d-flex", "d-none");
})

signin.addEventListener("click", function () {
    reg.classList.replace("d-flex", "d-none")
    login.classList.replace("d-none", "d-flex")
})

btnLogin.addEventListener('click', function () {
for(var i=0; i<users.length; i++){
if(users[i].email === getMail.value && users[i].pass === getpass.value){
    login.classList.replace('d-flex', 'd-none');
    home.classList.replace('d-none', 'd-flex');
    localStorage.setItem('name',JSON.stringify(users[i].name))
}else{
    document.getElementById('no').innerHTML = `Not a valid email or password`

}
}
clearForm()
welcome()
})

function welcome(){
    document.getElementById('intro').innerHTML = `welcome ${JSON.parse(localStorage.getItem('name'))}` 
}

registerBtn.addEventListener("click", function () {

if(regName.value !== '' && regEmail.value !== '' && regPass.value !== ''){
    
    var user = {
        name: regName.value,
        email: regEmail.value,
        pass: regPass.value
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    document.getElementById('valid').innerHTML = `success`
    document.getElementById('yes').innerHTML = ``

}else{

    document.getElementById('yes').innerHTML = `All inputs are required`
    document.getElementById('valid').innerHTML = ` `

}
clearForm()
})

logout.addEventListener('click', function(){
    home.classList.replace('d-flex','d-none')
    login.classList.replace('d-none','d-flex')
    
})

function clearForm(){
    getMail.value= '';
    getpass.value = '';
    regName.value ='';
    regEmail.value ='';
    regPass.value ='';
}












