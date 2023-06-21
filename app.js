/*calling the mobile menu and navbar menu into the JS file*/
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
/*the following javascript is used to activate the "activated" and "active" states of the menu
and menulinks classes, this directly affectes the CSS that is applied to them.*/
menu.addEventListener('click', function() {
    menu.classList.toggle('activated');
    menuLinks.classList.toggle('active');
});

/*calling all the relevant classes and IDs into the JS file */
const getstarted = document.querySelectorAll(".main_btn")
const modal = document.getElementById("myModal");
const btn = document.querySelectorAll(".myBtn");
const bldbtn = document.querySelectorAll(".build_Btn");
const psubtn = document.querySelectorAll(".PSU_Btn");
const mobobtn = document.querySelectorAll(".MoBo_Btn");
const cpubtn = document.querySelectorAll(".CPU_Btn");
const rambtn = document.querySelectorAll(".RAM_Btn");
const ssdbtn = document.querySelectorAll(".SSD_Btn");
const gpubtn = document.querySelectorAll(".GPU_Btn");
const cartbtn = document.querySelectorAll(".shopping_Btn");
const span = document.getElementsByClassName("close")[0];
const psu = document.querySelectorAll(".PSU_supply");
const mobo = document.querySelectorAll(".MoBo_supply");
const cpu = document.querySelectorAll(".CPU_supply");
const ram = document.querySelectorAll(".RAM_supply");
const ssd = document.querySelectorAll(".SSD_supply");
const gpu = document.querySelectorAll(".GPU_supply");
const cart = document.querySelectorAll(".shopping_cart");
const qty = document.getElementById("quantity");
const counter = document.querySelectorAll(".counter");
const minusbtn = document.querySelectorAll(".minusBtn");
const plusbtn = document.querySelectorAll(".plusBtn");
const shopcounter = document.querySelectorAll(".Shop_counter");
const totalcost= document.querySelectorAll(".Total_cost");

/*JS applied to all the "btn" elements, it changes the display of the modal from "none" to "block" */
btn.forEach(function (element){
    element.addEventListener('click', function() {
        modal.style.display = "block";
    });
});
/*This JS jumps the view of the user down to the first card/stock button that the user can use to open the modal */
bldbtn.forEach(function (element){
    element.addEventListener('click', function(){
        let target = document.getElementById("firstBtn");
          target.scrollIntoView();
    });
});
/*This JS jumps the view of the user down to the first card/stock button that the user can use to open the modal */
getstarted.forEach(function (element){
  element.addEventListener('click', function(){
      let target = document.getElementById("firstBtn");
        target.scrollIntoView();
  });
});
/*along with opening the modal, each button is set to change the display value of the relevant element to "block".
This is so that users only see the information relevant to the button they activated.
The information will always be found in the 0th index of the related array created by the querySelectorAll function */
psubtn.forEach(function (element){
  element.addEventListener('click', function() {
      psu[0].style.display = "block";
});
});

mobobtn.forEach(function (element){
  element.addEventListener('click', function() {
      mobo[0].style.display = "block";
});
});

cpubtn.forEach(function (element){
  element.addEventListener('click', function() {
      cpu[0].style.display = "block";
});
});

rambtn.forEach(function (element){
  element.addEventListener('click', function() {
      ram[0].style.display = "block";
});
});

ssdbtn.forEach(function (element){
  element.addEventListener('click', function() {
      ssd[0].style.display = "block";
});
});

gpubtn.forEach(function (element){
  element.addEventListener('click', function() {
      gpu[0].style.display = "block";
});
});

/*when users click on the shoppingcart button, it will display the cart's content along with all the information contained
in each element array's 1st index.*/
cartbtn.forEach(function (element){
  element.addEventListener('click', function() {
      cart[0].style.display = "block";
      psu[1].style.display = "block";
      mobo[1].style.display = "block";
      cpu[1].style.display = "block";
      ram[1].style.display = "block";
      ssd[1].style.display = "block";
      psu[1].style.display = "block";
      gpu[1].style.display = "block";
});
});
/*when a user presses "done" the modal is hidden and the contents on the modal is hidden */
span.onclick = function() {
  modal.style.display = "none";
  psu[0].style.display = "none";
  mobo[0].style.display = "none";
  cpu[0].style.display = "none";
  ram[0].style.display = "none";
  ssd[0].style.display = "none";
  gpu[0].style.display = "none";
  cart[0].style.display = "none";
}

// When the user clicks anywhere outside of the modal, the modal is hidden and the contents on the modal is hidden */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    psu[0].style.display = "none";
    mobo[0].style.display = "none";
    cpu[0].style.display = "none";
    ram[0].style.display = "none";
    ssd[0].style.display = "none";
    gpu[0].style.display = "none";
    cart[0].style.display = "none";
  }
}
/*the following JS is applied to the minus button.
At first, the button creates a counter that check the value of the associated input element.
if the value is higher than 0, the counter value is decreased by one.
The value of the counter in the shopping cart is then checked and if it is also higher than 0, the counter value is decreased and the displayed
quantity is adjusted in the shopping cart.
Lastly, the total is calculated using the "calculateTotal()" function found at the end of the js file */
minusbtn.forEach(function (element){
  let relativecounter = element.parentElement.getElementsByTagName("input")[0];
  element.addEventListener('click', function() {
    if (relativecounter.value > 0){
    relativecounter.value = parseInt(relativecounter.value) -1;
    }

    let cartItemId = 'cart_' + element.id;
  let counterToDecrease = document.getElementById(cartItemId);
  if (counterToDecrease.value > 0){
  counterToDecrease.value = parseInt(counterToDecrease.value) - 1;
  counterToDecrease.innerHTML = counterToDecrease.value;}
  calculateTotal();
  });
});

/*the following JS is applied to the plus button.
At first, the button creates a counter that check the value of the associated input element.
The counter value is increased by one.
The value of the counter in the shopping cart is then checked and is increased by 1. The displayed
quantity is adjusted in the shopping cart.
Lastly, the total is calculated using the "calculateTotal()" function found at the end of the js file */

plusbtn.forEach(function (element){
  let relativecounter = element.parentElement.getElementsByTagName("input")[0];
   element.addEventListener('click', function() {
     relativecounter.value = parseInt(relativecounter.value) +1;
  

  let cartItemId = 'cart_' + element.id;
  let counterToIncrease = document.getElementById(cartItemId);
  counterToIncrease.value = parseInt(counterToIncrease.value) + 1;
  counterToIncrease.innerHTML = counterToIncrease.value;
  calculateTotal();
  });
});

/*this function checks the value associated to each ID. This value has the "parseInt()" fucntion applied to it. Each of the converted Integers are added together to obtain a total value.
This total value is then multiplied by 100 (the default price of an item in this store) to obtain the total price.
This price is the applied to the shopping cart by setting the totalcost[0].innerHTML is the calculated value*/

function calculateTotal() {
  let itemCount = parseInt(document.getElementById("cart_PSU1").value) +  parseInt(document.getElementById("cart_PSU2").value) + parseInt(document.getElementById("cart_MoBo1").value) + 
  parseInt(document.getElementById("cart_MoBo2").value) + parseInt(document.getElementById("cart_CPU1").value) + parseInt(document.getElementById("cart_CPU2").value) + 
  parseInt(document.getElementById("cart_RAM1").value) + parseInt(document.getElementById("cart_RAM2").value) + parseInt(document.getElementById("cart_SSD1").value) + 
  parseInt(document.getElementById("cart_SSD2").value) + parseInt(document.getElementById("cart_GPU1").value) + parseInt(document.getElementById("cart_GPU2").value);
  console.log(itemCount); 
  totalcost[0].innerHTML = "€" + itemCount * 100;
  console.log(totalcost[0].innerHTML);
};