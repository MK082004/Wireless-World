document.addEventListener('DOMContentLoaded', function() {
  var emailInput = document.querySelector('.email');
  var submitButton = document.querySelector('.submit');

  submitButton.addEventListener('click', function(e) {
    e.preventDefault(); 

    var email = emailInput.value;

    // Validate email
    if (email && email.includes('@')) {
      // Show success modal
      $('#successModal').modal('show');

      // Clear email input
      emailInput.value = '';
    }
  });
});


jQuery(document).ready(function() {
  jQuery('.footer-mb-dropdown').on('click', function() {
      if (jQuery(window).width() <= 767) {
          var dropdown = jQuery(this).next('.footer-dropdown');
          jQuery('.footer-dropdown').not(dropdown).slideUp();
          dropdown.slideToggle();
          jQuery(this).find('.fa-angle-down').toggleClass('rotate');
      }
  });

  jQuery(window).on('load resize', function() {
      if (jQuery(window).width() > 767) {
          jQuery('.footer-dropdown').removeAttr('style');
          jQuery('.footer-mb-dropdown .fa-angle-down').removeClass('rotate');
      }
  });
});

var saleMenuTimeout; 

function showSaleMenu() {
  var saleMenu = $("#sale-menu");
  saleMenu.stop().slideDown(200); 
}

function keepSaleMenuOpen() {
  clearTimeout(saleMenuTimeout);
  saleMenuTimeout = setTimeout(function() {
    var saleMenu = $("#sale-menu");
    saleMenu.stop().slideUp(200); 
  }, 200);
}

$("#sale-menu").on("mouseover", function() {
  clearTimeout(saleMenuTimeout);
});

$("#sale-menu").on("mouseout", function(event) {
  if (!$(event.relatedTarget).closest("#sale-menu").length) {
    keepSaleMenuOpen();
  }
});

// Get the necessary elements
const hamburgerIconNavbar = document.querySelector('.fa-bars');
const overlayNavbar = document.querySelector('.overlay-navbar');
const cartNavbar = document.querySelector('.cart-navbar');
const closeCartIconNavbar = document.querySelector('#close-cart_navbar');
const body = document.querySelector('body');

// Function to open the cart
function openCart() {
  overlayNavbar.style.display = 'block';
  cartNavbar.classList.add('active');
  body.style.overflow = 'hidden'; // Hide the scroll bar
}

// Function to close the cart
function closeCart() {
  overlayNavbar.style.display = 'none';
  cartNavbar.classList.remove('active');
  body.style.overflow = 'auto'; // Show the scroll bar
}

// Event listeners
hamburgerIconNavbar.addEventListener('click', openCart);
closeCartIconNavbar.addEventListener('click', closeCart);
overlayNavbar.addEventListener('click', closeCart);


$(document).ready(function() {
  $(".discount-hover-text-div").hide();

  $(".product-card-upper-discounted-tag").hover(
    function() {
      // Hide all other discount-hover-text-div elements
      $(".discount-hover-text-div").hide();
      // Show the discount-hover-text-div of the current card
      $(this).siblings(".discount-hover-text-div").show();
    },
    function() {
      // Hide the discount-hover-text-div when mouse moves out
      $(this).siblings(".discount-hover-text-div").hide();
    }
  );
});

$(document).ready(function() {
  $(".whishlist-hover-text-div").hide();

  $(".product-card-upper-whishicon").hover(
    function() {
      // Hide all other discount-hover-text-div elements
      $(".whishlist-hover-text-div").hide();
      // Show the discount-hover-text-div of the current card
      $(this).siblings(".whishlist-hover-text-div").show();
    },
    function() {
      // Hide the discount-hover-text-div when mouse moves out
      $(this).siblings(".whishlist-hover-text-div").hide();
    }
  );
});


// Function to animate the counter
function animateCounter(targetElement, startValue, endValue, duration) {
  let currentCount = startValue;
  const increment = Math.ceil((endValue - startValue) / (duration / 50)); 

  const timer = setInterval(() => {
    currentCount += increment;
    if (currentCount >= endValue) {
      currentCount = endValue;
      clearInterval(timer);
    }
    targetElement.textContent = currentCount.toLocaleString(); 
  }, 20);
}

// Get the target elements
const counterElements = document.querySelectorAll('.counter');

// Callback function for the Intersection Observer
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counterElement = entry.target;
      const startValue = 0;
      const endValue = parseInt(counterElement.dataset.counter, 10);
      const duration = 4000; 
      animateCounter(counterElement, startValue, endValue, duration);
      observer.unobserve(counterElement); 
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, 
  rootMargin: '0px', 
  threshold: 0.2, 
});

// Observe the counter elements
counterElements.forEach((counterElement) => {
  observer.observe(counterElement);
});


// Filter JS

function filterByPrice() {
  var under10000 = document.getElementById("under10000").checked;
  var under20000 = document.getElementById("under20000").checked;
  var under30000 = document.getElementById("under30000").checked;
  var under40000 = document.getElementById("under40000").checked;
  var under50000 = document.getElementById("under50000").checked;
  var under60000 = document.getElementById("under60000").checked;
  var under70000 = document.getElementById("under70000").checked;
  var under80000 = document.getElementById("under80000").checked;
  var under110000 = document.getElementById("under110000").checked;

  var mobiles = document.getElementsByClassName("col-lg-3");

  for (var i = 0; i < mobiles.length; i++) {
    var mobile = mobiles[i];
    var price = parseInt(mobile.getAttribute("data-price"));

    if (
      (!under10000 && !under20000 && !under30000 && !under40000 && !under50000 && !under60000 && !under70000 && !under80000 && !under110000)  ||
      (under10000 && price <= 10000) ||  
      (under20000 && price <= 20000) ||
      (under30000 && price <= 30000) ||
      (under40000 && price <= 40000) ||
      (under50000 && price <= 50000) ||
      (under60000 && price <= 60000) ||
      (under70000 && price <= 70000) ||
      (under80000 && price <= 80000) ||
      (under110000 && price <= 1100000)
    ) {
      mobile.style.display = "block";
    } else {
      mobile.style.display = "none";
    }
  }
}


function filterByName(checkbox) {
  var apple = document.getElementById("apple");
  var xiaomi = document.getElementById("xiaomi");
  var samsung = document.getElementById("samsung");
  var oneplus = document.getElementById("oneplus"); 
  var tecno = document.getElementById("tecno");     
  var huawei = document.getElementById("huawei");   
  var infinix = document.getElementById("infinix"); 
  var vivo = document.getElementById("vivo");       
  var oppo = document.getElementById("oppo");       
  var mobiles = document.getElementsByClassName("product-card");

  if (checkbox === apple) {
    xiaomi.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    huawei.checked = false;  
    infinix.checked = false; 
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === xiaomi) {
    apple.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    huawei.checked = false;  
    infinix.checked = false; 
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === samsung) {
    apple.checked = false;
    xiaomi.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    huawei.checked = false;  
    infinix.checked = false; 
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === oneplus) { 
    apple.checked = false;
    xiaomi.checked = false;
    samsung.checked = false;
    tecno.checked = false;   
    huawei.checked = false;  
    infinix.checked = false; 
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === tecno) { 
    apple.checked = false;
    xiaomi.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    huawei.checked = false;  
    infinix.checked = false; 
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === huawei) { 
    apple.checked = false;
    xiaomi.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    infinix.checked = false; 
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === infinix) { 
    apple.checked = false;
    xiaomi.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    huawei.checked = false;  
    vivo.checked = false;    
    oppo.checked = false;    
  } else if (checkbox === vivo) { 
    apple.checked = false;
    xiaomi.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    huawei.checked = false;  
    infinix.checked = false; 
    oppo.checked = false;    
  } else if (checkbox === oppo) { 
    apple.checked = false;
    xiaomi.checked = false;
    samsung.checked = false;
    oneplus.checked = false; 
    tecno.checked = false;   
    huawei.checked = false;  
    infinix.checked = false; 
    vivo.checked = false;    
  }

  for (var i = 0; i < mobiles.length; i++) {
    var mobile = mobiles[i];
    var brand = mobile.getAttribute("data-brand");

    if (
      (apple.checked && brand === "APPLE") ||
      (xiaomi.checked && brand === "XIAOMI") ||
      (samsung.checked && brand === "SAMSUNG") ||
      (oneplus.checked && brand === "ONEPLUS") ||  
      (tecno.checked && brand === "TECNO") ||      
      (huawei.checked && brand === "HUAWEI") ||    
      (infinix.checked && brand === "INFINIX") ||  
      (vivo.checked && brand === "VIVO") ||        
      (oppo.checked && brand === "OPPO") ||        
      (!apple.checked && !xiaomi.checked && !samsung.checked && !oneplus.checked && !tecno.checked && !huawei.checked && !infinix.checked && !vivo.checked && !oppo.checked) // All unchecked
    ) {
      mobile.style.display = "block";
    } else {
      mobile.style.display = "none";
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
var appleCheckbox = document.getElementById('apple');
if (appleCheckbox) {
  appleCheckbox.onchange = function () {
    filterByName(appleCheckbox);
  };  
}
var xiaomiCheckbox = document.getElementById("xiaomi");
if (xiaomiCheckbox) {
  xiaomiCheckbox.onchange = function () {
    filterByName(xiaomiCheckbox);
  };
}

var samsungCheckbox = document.getElementById("samsung");
if (samsungCheckbox) {
  samsungCheckbox.onchange = function () {
    filterByName(samsungCheckbox);
  };
}

var oneplusCheckbox = document.getElementById("oneplus");
if (oneplusCheckbox) {
  oneplusCheckbox.onchange = function () {                  
    filterByName(oneplusCheckbox);                          
  };
}

var tecnoCheckbox = document.getElementById("tecno"); 
if (tecnoCheckbox) {
  tecnoCheckbox.onchange = function () {                    
    filterByName(tecnoCheckbox);                            
  };
}    

var huaweiCheckbox = document.getElementById("huawei");  
if (huaweiCheckbox) {
  huaweiCheckbox.onchange = function () {                   
    filterByName(huaweiCheckbox);                           
  };
} 

var infinixCheckbox = document.getElementById("infinix"); 
if (infinixCheckbox) {
  infinixCheckbox.onchange = function () {                  
    filterByName(infinixCheckbox);                          
  };
}

var vivoCheckbox = document.getElementById("vivo");       
if (vivoCheckbox) {
  vivoCheckbox.onchange = function () {                     
    filterByName(vivoCheckbox);                             
  };
}

var oppoCheckbox = document.getElementById("oppo");        
if (oppoCheckbox) {
  oppoCheckbox.onchange = function () {                     
    filterByName(oppoCheckbox);                             
  };
}
});