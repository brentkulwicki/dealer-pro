// function to remove the fixed height/reattach the height when the menu is toggled
// const navbarToggle = document.getElementById('navbar-toggle');
// const navbar = document.getElementById('navbar');
// let open = false;

// const toggleNav = () => {
//     if (open === false) {
//         navbar.style.height = 'auto';
//         open = true;
//     } else if (open === true) {
//         navbar.style.height = '12.5%';
//         open = false;
//     };
// };

// navbarToggle.addEventListener('click', toggleNav);

// const formName = document.getElementById('name');
// const formEmail = document.getElementById('email');
// const formPhone = document.getElementById('phone');
// const formComment = document.getElementById('comment');
// const formSubmit = document.getElementById('submit');

// const collectResponse = () => {
//     formName.removeAttribute('class', 'not-valid');
//     formEmail.removeAttribute('class', 'not-valid');
//     formPhone.removeAttribute('class', 'not-valid');
//     formComment.removeAttribute('class', 'not-valid');
//     let validName = false;
//     let validEmail = false;
//     let validPhone = false;
//     let validComment = false;
//     if (formName.value.length < 1) {
//         formName.setAttribute('class', 'not-valid');
//     } else {
//         validName = true;
//     };
//     if (formEmail.value.length < 5) {
//         formEmail.setAttribute('class', 'not-valid');
//     } else {
//         validEmail = true;
//     };
//     if (formPhone.value.length < 7) {
//         formPhone.setAttribute('class', 'not-valid');
//     } else {
//         validPhone = true;
//     };
//     if (formComment.value.length < 1) {
//         formComment.setAttribute('class', 'not-valid');
//     } else {
//         validComment = true;
//     };
//     if (validName === true && validEmail === true && validPhone === true && validComment === true) {
//         let responseObject = {
//             name: formName.value,
//             email: formEmail.value,
//             phone: formPhone.value,
//             comment: formComment.value,
//         };
//         responseObject = JSON.stringify(responseObject);
        
//     };
// };

// const blurFunction = (e) => {
//     if (e.target.value.length < 1) {
//         e.target.setAttribute('class', 'not-valid');
//     };
// };

// const removeNVClass = (e) => {
//     e.target.removeAttribute('class', 'not-valid');
// };

// formName.addEventListener('blur', blurFunction);
// formEmail.addEventListener('blur', blurFunction);
// formPhone.addEventListener('blur', blurFunction);
// formComment.addEventListener('blur', blurFunction);
// formName.addEventListener('focus', removeNVClass);
// formEmail.addEventListener('focus', removeNVClass);
// formPhone.addEventListener('focus', removeNVClass);
// formComment.addEventListener('focus', removeNVClass);
// formSubmit.addEventListener('click', collectResponse);