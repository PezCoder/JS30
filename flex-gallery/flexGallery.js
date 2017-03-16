;(function() {
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    image.addEventListener('transitionend', animateText);
  });

  function animateText(e) {
    if(e.propertyName === 'transform') {
      const text = e.target.querySelector('.image-text');
      text.classList.toggle('animate');
    }
  }
}());
