function Style(button) {
  var buttons = document.getElementsByClassName("size-inner-wrap-selectors");
  var sizeTextElement = document.getElementById("sku-text");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  button.classList.add("active");
  sizeTextElement.innerText = button.innerText;
}

// Set initial active button and update sku-text
var initialButton = document.querySelector(".size-inner-wrap-selectors.active");
if (initialButton) {
  var sizeTextElement = document.getElementById("sku-text");
  sizeTextElement.innerText = initialButton.innerText;
}


function decreaseQuantity() {
  var quantityInput = document.querySelector(".quantity");
  var currentValue = parseInt(quantityInput.value) || 0;
  var minusSectionIcon = document.querySelector(".minus-section i");
  var plusSectionIcon = document.querySelector(".plus-section i");

  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    minusSectionIcon.style.color = "white";
    plusSectionIcon.style.color = "white";
  } else {
    quantityInput.value = 1;
    minusSectionIcon.style.color = "grey";
    plusSectionIcon.style.color = "white";
  }
}

function increaseQuantity() {
  var quantityInput = document.querySelector(".quantity");
  var currentValue = parseInt(quantityInput.value) || 0;
  var minusSectionIcon = document.querySelector(".minus-section i");
  var plusSectionIcon = document.querySelector(".plus-section i");

  quantityInput.value = currentValue + 1;
  minusSectionIcon.style.color = "white";
  plusSectionIcon.style.color = "white";
}



  
// function increaseQuantity() {
//     var quantityInput = document.querySelector(".quantity");
//     var currentValue = parseInt(quantityInput.value) || 0;
    
//     quantityInput.value = currentValue + 1;
// }

var descriptionIcon = document.getElementById('description-icon');
var descriptionOverlay = document.getElementById('description-overlay');
var isDescriptionOpen = true;

descriptionIcon.addEventListener('click', function() {
  isDescriptionOpen = !isDescriptionOpen;
  
  if (isDescriptionOpen) {
    descriptionOverlay.style.maxHeight = null;
    descriptionIcon.querySelector('i').style.transform = 'rotate(0deg)';
    descriptionIcon.querySelector('i').style.transition = '0.1s all ease';
  } else {
    descriptionOverlay.style.maxHeight = descriptionOverlay.scrollHeight + 'px';
    descriptionIcon.querySelector('i').style.transform = 'rotate(-180deg)';
  }
});


let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

  toggle.onclick = function()
  {
    menu.classList.toggle("active")
  }

  
  function changetwoimage(clickedImg) {
    var fullImg = document.getElementById("main-long-img");
    fullImg.src = clickedImg.src;
  }
  
