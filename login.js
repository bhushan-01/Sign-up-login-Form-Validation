const form = document.getElementById('form');
const Username = document.getElementById('Username');

const Password = document.getElementById('Password');
//event addition
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
// validate function
const validate = () => {
    const UsernameVal = Username.value.trim();
    const PasswordVal = Password.value.trim();

    const isusernameval =Username=>{
        const re =/^[a-zA-Z0-9.\-_$@*!]{7,30}$/
        return re.test(String(Username))
    }
    const ispasswordval = Password=>{
        const re= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        return re.test(Password)
    }
    
    
    //validate username
    if (UsernameVal === "") {
        setErrormsg(Username, '-Username cannot be blank \n -Space are not allowed');
    } else if (UsernameVal.length <= 3) {
        setErrormsg(Username, '-Username min 4 char');
    }else if(!isusernameval(UsernameVal)){
        setErrormsg(Username,"-Put valid username \n -Contain numeric value\n-Contain uppercase")
    } 
    else {
        setSuccessMsg(Username);
    }
   //validate password 
 
   if ( PasswordVal=== "") {
    setErrormsg(Password, '-Password cannot be blank\n -Space are not allowed');
} else if (PasswordVal.length < 8) {
    setErrormsg(Password, '-Minimum 8 char');
}else if(!ispasswordval(PasswordVal))
{
setErrormsg(Password,"-Must be 8 to 16 letter\n-Must contain atleast 1 lowercase letter\n-Must contain atleast 1 uppercase letter \n -Must contain atleast 1 Numeric digit \n -Must contain 1 Special character")
}  
else {
    setSuccessMsg(Password);

}

function setErrormsg(input, Errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = Errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}
}
// for AvoidSpace
function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
