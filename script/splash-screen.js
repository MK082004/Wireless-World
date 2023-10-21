document.addEventListener('DOMContentLoaded', function() {
  var animationSection = document.getElementById('Splash-screen_animation');

  // Function to hide the animation section and toggle the body's scroll bar
  function hideAnimationSection() {
    if (animationSection) {
      animationSection.style.transition = 'transform 0.5s ease-in-out';
      animationSection.style.transform = 'translateY(-100%)';

      setTimeout(function() {
        if (animationSection.parentNode) {
          animationSection.parentNode.removeChild(animationSection);
          document.body.style.overflow = 'auto'; // Show the body's scroll bar
        }
      }, 500);

      document.body.style.overflow = 'auto'; // Show the body's scroll bar during animation
    }
  }

  setTimeout(hideAnimationSection, 3000);

  // Handle click event on the icon
  var icon = document.querySelector('.fa-angle-double-up');
  if (icon) {
    icon.addEventListener('click', function() {
      hideAnimationSection();
    });
  }
});



