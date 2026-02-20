const vse_slide = document.querySelectorAll('.slide');

vse_slide.forEach(slide => {
  slide.addEventListener('click', function() {
    vse_slide.forEach(s => s.classList.remove('slide__active'));

    this.classList.add('slide__active');
  });
});