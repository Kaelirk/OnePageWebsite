const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('activated');
    menuLinks.classList.toggle('active');
});


var modal = document.getElementById("myModal");
var btn = document.querySelectorAll(".myBtn");
var psubtn = document.querySelectorAll(".PSU_Btn");
var mobobtn = document.querySelectorAll(".MoBo_Btn");
var cpubtn = document.querySelectorAll(".CPU_Btn");
var rambtn = document.querySelectorAll(".RAM_Btn");
var ssdbtn = document.querySelectorAll(".SSD_Btn");
var gpubtn = document.querySelectorAll(".GPU_Btn");
var cartbtn = document.querySelectorAll(".shopping_Btn");
var span = document.getElementsByClassName("close")[0];
var psu = document.getElementById("PSU_supply");
var mobo = document.getElementById("MoBo_supply");
var cpu = document.getElementById("CPU_supply");
var ram = document.getElementById("RAM_supply");
var ssd = document.getElementById("SSD_supply");
var gpu = document.getElementById("GPU_supply");
var cart = document.getElementById("shopping_cart");

btn.forEach(function (element){
    element.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

psubtn.forEach(function (element){
  element.addEventListener('click', function() {
      psu.style.display = "block";
});
});

mobobtn.forEach(function (element){
  element.addEventListener('click', function() {
      mobo.style.display = "block";
});
});

cpubtn.forEach(function (element){
  element.addEventListener('click', function() {
      cpu.style.display = "block";
});
});

rambtn.forEach(function (element){
  element.addEventListener('click', function() {
      ram.style.display = "block";
});
});

ssdbtn.forEach(function (element){
  element.addEventListener('click', function() {
      ssd.style.display = "block";
});
});

gpubtn.forEach(function (element){
  element.addEventListener('click', function() {
      gpu.style.display = "block";
});
});

cartbtn.forEach(function (element){
  element.addEventListener('click', function() {
      cart.style.display = "block";
});
});

span.onclick = function() {
  modal.style.display = "none";
  psu.style.display = "none";
  mobo.style.display = "none";
  cpu.style.display = "none";
  ram.style.display = "none";
  ssd.style.display = "none";
  gpu.style.display = "none";
  cart.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    psu.style.display = "none";
    mobo.style.display = "none";
    cpu.style.display = "none";
    ram.style.display = "none";
    ssd.style.display = "none";
    gpu.style.display = "none";
    cart.style.display = "none";
  }
}