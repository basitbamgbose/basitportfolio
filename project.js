const hambugger = document.querySelector('.icon-open');
const navigation = document.querySelector('.logo > nav');

hambugger.onclick =(iconopen)=>{
     if(navigation.style.display == 'block'){
        navigation.style.display = 'none'
        hambugger.src = './images/icon-hamburger.svg'
     }else{
        navigation.style.display = 'block'
        hambugger.src ='./images/icon-close.svg'
     }
}

// document.getElementById('contactForm').addEventListener('submit',function(event){
//    event.preventDefault();
//    validateForm(contactForm);
// });
// let buttonClicked = null;
// let termsBtn = false;
// const validateForm =(contactForm)=>{
//    let formValid = false;
//    // //clear all errors
//    const errors = document.querySelectorAll('.error');
//    errors.forEach(error => error.textContent = '');
//    const inputs = document.querySelectorAll('input');
//    inputs.forEach(input => input.classList.remove('invalid'));
//    // const textarea = document.querySelector('textarea');
//    // textarea.classList.remove('invalid');

//    //validate firstname
//    const name = document.getElementById('name');
//    const nameErr = document.querySelector('.name');

//    if(name.value.trim() == ''){
//        // formValid = true;
//        nameErr.textContent = 'This field is required';
//        name.classList.add('invalid');
//    }else if(/^\d/.test(name.value.trim())){
//        // formValid = true;
//        nameErr.textContent = 'Firstname should not start with a number';
//        name.classList.add('invalid');
//    }   
//    // //validate lastname
//    // const lastName = document.getElementById('lastName');
//    // const lastNameErr = document.querySelector('.last-name');

//    // if(lastName.value.trim() == ''){
//    //     formValid = true;
//    //     lastNameErr.textContent = 'This field is required';
//    //     lastName.classList.add('invalid');
//    // }else if(/^\d/.test(lastName.value.trim())){
//    //     formValid = true;
//    //     lastNameErr.textContent = 'lastname should not start with a number';
//    //     lastName.classList.add('invalid');
//    // }

//    //validate email
//    const email = document.querySelector('#email');
//    const emailErr = document.querySelector('.email-err');
//    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//    if(email.value.trim() == ''){
//        formValid = true;
//        emailErr.textContent = 'This field is required';
//        email.classList.add('invalid');
//    }else if(!emailRegex.test(email.value.trim())){
//        formValid = true;
//        emailErr.textContent = 'Invalid email address';
//        email.classList.add('invalid');
//    }

//    //button querry
//    if(!buttonClicked){
//        formValid = true;
//        btn_err.textContent = 'Plese select a query type';
//    }

//    // //validate message
//    const message = document.querySelector('#message');
//    const message_err = document.querySelector('.message-err');

//    if(message.value.trim() == ''){
//        formValid = true;
//        message_err.textContent = 'This field is required';
//        message.classList.add('invalid');
//    }
//    // //terms check
//    if(!termsBtn){
//        formValid = true;
   
//    }
//    if(!formValid){
//        const message = document.querySelector('.message');
//        message.style.display = 'block';
//    }
// }

// const btn_err = document.querySelector('.btn-err');
// const btn_querry1 = document.querySelector('#btn-querry1');
// const btn_querry2 = document.querySelector('#btn-querry2');
// const query_check1 = document.querySelector('.query-check1');
// const query_check2 = document.querySelector('.query-check2');

// btn.addEventListener('click',function(){
//    buttonClicked = true;
//    btn.classList.add('valid');
   
// });
// // btn_querry2.addEventListener('click',function(){
// //    buttonClicked = true;
// //    btn_querry2.classList.add('valid');
// //    query_check2.style.display ='block';
// // });

// // // //terms and condition
// // const terms = document.querySelector('.consent-wrapper');
// // const terms_img = document.querySelector('.consent-wrapper > span >img');
// // const terms_err = document.querySelector('.terms-err');

