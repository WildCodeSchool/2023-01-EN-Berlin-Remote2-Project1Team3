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

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  if (n > 0) {
    slideIndex++;
  } else {
    slideIndex--;
  };
  showSlides(slideIndex);
};

//function currentSlide(n) {
//  showSlides(slideIndex = n);
//};

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides"); //gives us 8 slides now

  /*
  This is the root of all problems.
  Slides should be dealt with for each card separately.
  Now they are all in one big heap.
  Only one slide is shown at a time... for all cards!
  And when you click the "plusslides" button 4 times the text disappears...
  ...but appears on the next slide.
  So buttons also work across cards.
  */

  if (n >= slides.length) { //slides.length equals 8 now
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  slides[slideIndex].style.display = "block";

//  if (slides[slideIndex - 1]?.style?.display) { //the condition is always equal to "none", which is a non-empty string, so it is always truthy
//    slides[slideIndex - 1].style.display = "block";
//  };

};