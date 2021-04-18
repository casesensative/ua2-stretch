const formBtn  = document.getElementById('close-form');
const form = document.querySelector('form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const formContainer = document.getElementsByClassName('form-container');

const emailList = [];

const main = document.querySelector('main');
const cart = document.createElement('div');

let cartItems = 0;

function addToCart() {
  if (cartItems === 0) {
    cartItems = 1;
    cart.setAttribute('class', 'cart-display');
    cart.innerText = ('Your Cart: 1 Item');
    main.appendChild(cart);
  } else {
    cartItems++;
    cart.innerText = (`Your Cart: ${cartItems} Item`); 
  }
}


function toggler() {
  form.classList.toggle('hide');
  formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X';
}

function validateForm() {
  console.log(nameInput.value);
  if (!nameInput.value && !emailInput.value) {
    alert('You must enter a name and email address to subscribe!');
    nameInput.style.cssText = 'border: 2px solid red;';
    emailInput.style.cssText = 'border: 2px solid red;';
  } else if (!nameInput.value && emailInput.value) {
    nameInput.style.cssText = 'border: 2px solid red;'
    alert('Please enter a name to subscribe!');
  } else if (nameInput.value && !emailInput.value) {
    emailInput.style.cssText = 'border: 2px solid red;';
    alert('You must enter an email address to subscribe!');
  } else {
    emailList.push({name: nameInput, email: emailInput});
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
  displayThankYou();
});



function displayThankYou() {
  formContainer.innerText = 'Thank you for Subscribing!';
  setTimeout(function () {
    formContainer.remove();
  }, 3000);
}

nameInput.addEventListener('change', function() {
  nameInput.style.border = none;
})

emailInput.addEventListener('change', function() {
  emailInput.style.border = none;
})
