cardsElement = document.querySelectorAll('.card');

removeActiveClasses = () => {
    cardsElement.forEach(card => {
        card.classList.remove('active');
    });
};

cardsElement.forEach(card => {
    card.addEventListener('click',() => {
      let cardStatus = true;
      if (card.classList.contains('active')) {
        cardStatus = false;
      };
      removeActiveClasses();
      if (cardStatus) {
        card.classList.add('active');
      };
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slides[slideIndex - 1]?.style?.display)
    slides[slideIndex - 1].style.display = "block";
}