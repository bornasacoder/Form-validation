console.log("welocme to form validation");
const names = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
let validemail = false;
let validphone = false;
let validuser = false;
$('#failure').hide();
$('#success').hide();
// console.log(names,email,phone);

names.addEventListener('blur',()=>{
    console.log("name is blurred");
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = names.value;
    console.log(regex , str);
    if(regex.test(str)){
        console.log('it matched');
        names.classList.remove('is-invalid');
         validuser = true;
    }else{
          console.log('its not matched');
          names.classList.add('is-invalid');
    }
});
email.addEventListener('blur',()=>{
    console.log("eamil is blurred");
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\>0-9a-zA-Z]+)\.([a-zA-Z]){2,7}/;
    let str = email.value;
    console.log(regex , str);
    if(regex.test(str)){
        console.log('your email is valid');
          email.classList.remove('is-invalid');
          validemail = true;

    }else{
          console.log('your email is invalid');
          email.classList.add('is-invalid');
    }
});


phone.addEventListener('blur',()=>{
    console.log("name is blurred");
    // validate number here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex , str);
    if(regex.test(str)){
        console.log('it matched');
        phone.classList.remove('is-invalid');
        validphone = true;

    }else{
          console.log('its not matched');
          phone.classList.add('is-invalid');
    }
});
let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('ypu are clicked here');
    // submit your form here

    if(validemail && validuser && validphone){
        console.log('phone,eamil and username are valid, submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }else{
        console.log('one of phone and email and username are not valid . hence not submitting the form ,please correct the errors and try again');

        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
});