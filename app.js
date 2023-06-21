const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('activated');
    menuLinks.classList.toggle('active');
});

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

btn.forEach(function (element){
    element.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

bldbtn.forEach(function (element){
    element.addEventListener('click', function(){
        let target = document.getElementById("firstBtn");
          target.scrollIntoView();
    });
});

getstarted.forEach(function (element){
  element.addEventListener('click', function(){
      let target = document.getElementById("firstBtn");
        target.scrollIntoView();
  });
});

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

// When the user clicks anywhere outside of the modal, close it and set all display styles back to none
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

function calculateTotal() {
  let itemCount = parseInt(document.getElementById("cart_PSU1").value) +  parseInt(document.getElementById("cart_PSU2").value) + parseInt(document.getElementById("cart_MoBo1").value) + 
  parseInt(document.getElementById("cart_MoBo2").value) + parseInt(document.getElementById("cart_CPU1").value) + parseInt(document.getElementById("cart_CPU2").value) + 
  parseInt(document.getElementById("cart_RAM1").value) + parseInt(document.getElementById("cart_RAM2").value) + parseInt(document.getElementById("cart_SSD1").value) + 
  parseInt(document.getElementById("cart_SSD2").value) + parseInt(document.getElementById("cart_GPU1").value) + parseInt(document.getElementById("cart_GPU2").value);
  console.log(itemCount); 
  totalcost[0].innerHTML = "€" + itemCount * 100;
  console.log(totalcost[0].innerHTML);
};


/*JS for shoppingcart:
Requires each item to become visible when counter > 0
Each item's name should be visible
Cost of each item mutiplied by counter value
Total cost to be calculated at the end by adding each row cost together*/