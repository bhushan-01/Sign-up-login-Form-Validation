
const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Fullname = document.getElementById('Fullname');
const Firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const Email = document.getElementById('Email');
const Phonenumber = document.getElementById('Phonenumber');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


// define the validate function
  const isfullnameval = Fullname =>{
    const re=/^[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+$/
    // const re=/^[a-zA-z\s]+$ /
    return re.test(String(Fullname))
  }
  const isfirstnameval = Firstname =>{
    const re =/^[A-Z][a-z 0-9]+$/
    return re.test(String(Firstname))
    
  }
  const islastnameval = Lastname =>{
    const re =/^[A-Z][a-z 0-9]+$/
    return re.test(String(Lastname))
    
  }
const isemailval= Email =>{
    const re= /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/
    return re.test(String(Email))
}
const isusernameval =Username=>{
    const re =/^[a-zA-Z0-9.\-_$@*!]{7,30}$/
    return re.test(String(Username))
}
const isphonenumberval =Phonenumber=>{
    const re =/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/

    return re.test((Phonenumber))
}
const ispasswordval = Password=>{
    const re= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    return re.test(Password)
}



const validate = () => {
    const UsernameVal = Username.value.trim();
    const FullnameVal = Fullname.value.trim();
    const FirstnameVal = Firstname.value.trim();
    const LastnameVal = Lastname.value.trim();
    const EmailVal = Email.value.trim();
    const PhonenumberVal = Phonenumber.value.trim();
    const PasswordVal = Password.value.trim();
    const ConfirmPasswordVal = ConfirmPassword.value.trim();

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
//fullname
    if (FullnameVal === "") {
        setErrormsg(Fullname, '-Fullname cannot be blank');
    } else if (FullnameVal.length <= 5) {
        setErrormsg(Fullname, '-Fullname min 10 char');}
    else if(!isfullnameval(FullnameVal)){
        setErrormsg(Fullname,"-Put valid fullname \n -Each Word starting letter must be uppercase")
    } 
    else {
        setSuccessMsg(Fullname);
    }
 //validate firstname
 if (FirstnameVal === "") {
    setErrormsg(Firstname, '-Firstname cannot be blank \n -space are not allowed');
} else if (FirstnameVal.length <= 3) {
    setErrormsg(Firstname, 'Firstname min 4 char');
}else if(!isfirstnameval(FirstnameVal)){
    setErrormsg(Firstname,"-put valid firstname \n -Must contain 1 uppercase\n -Must contain lowercase")
} 
else {
    setSuccessMsg(Firstname);
}
//lastname
if (LastnameVal === "") {
    setErrormsg(Lastname, '-Lastname cannot be blank \n -Space are not allowed');
} else if (LastnameVal.length <= 3) {
    setErrormsg(Lastname, '-Lastname min 4 char');
}else if(!islastnameval(LastnameVal)){
    setErrormsg(Lastname,"-Put valid lastname \n -Must contain 1 uppercase\n -Must contain lowercase")
} 
else {
    setSuccessMsg(Lastname);
}
//validate mail
if (EmailVal === "") {
    setErrormsg(Email, '-Email cannot be blank \n -Space are not allowed');
} else if (EmailVal.length <= 10) {
    setErrormsg(Email, '-Email min 10 char'.trim());
}else if(!isemailval(EmailVal))
{
setErrormsg(Email,"-Put a valid mail \n -Please assign the (@ , .)")
} 
else {
    setSuccessMsg(Email);
}


    //validate phone number
    if (PhonenumberVal === "") {
        setErrormsg(Phonenumber, '-Number cannot be blank\n -Space are not allowed');
    } else if (PhonenumberVal.length <= 2) {
        setErrormsg(Phonenumber, '-Not a valid Mobile number');
    }else if(!isphonenumberval(PhonenumberVal)){
        setErrormsg(Phonenumber,"-Put +91 before mobile number \n -Mobile Number must be 10 digits")
    } 
    else {
        setSuccessMsg(Phonenumber);


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


    //validate confirm password 
 
    if ( ConfirmPasswordVal=== "") {
        setErrormsg(ConfirmPassword, '-Password cannot be blank\n -Space are not allowed');
    } else if (ConfirmPasswordVal != PasswordVal ) {
        setErrormsg(ConfirmPassword, 'Password are not  matching');
    } else {
        setSuccessMsg(ConfirmPassword);

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
