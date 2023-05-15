const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('activated');
    menuLinks.classList.toggle('active');
});


var modal = document.getElementById("myModal");
var btn = document.querySelectorAll(".myBtn");
var span = document.getElementsByClassName("close")[0];

btn.forEach(function (element){
    element.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}