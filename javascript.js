const activeSlides = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const cardsElement = document.querySelectorAll(".card");

initialiseCards = () => {
  cardsElement.forEach((card) => {

    // Expanding and collapsing the card

    card.addEventListener("click",() => {
      //Collapse all cards
      cardsElement.forEach(card => {
          card.classList.remove("active");
      });
      //Expand the card that was clicked
      if (card.classList.contains("closeMe")) {
        card.classList.remove("closeMe");
      } else {
        card.classList.add("active");
      }
    });

    const closeButton = card.querySelector(".collapse");
    closeButton.addEventListener("click", () => {
      card.classList.add("closeMe");
    });

    // Dealing with the slides

    // In our HTML file the cards have an id ending with the number of the slideshow, like ".card1"
    // There are 9 cards in total, their numbers go from 1 to 9
    const cardId = card.id; // The last letter of cardId is the number we need
    const cardNumber = +cardId[cardId.length - 1];

    const nextButton = card.querySelector(".next");
    const prevButton = card.querySelector(".prev");

    nextButton.addEventListener("click", () => {
      slideTheShow(1, cardNumber);
    });
    prevButton.addEventListener("click", () => {
      slideTheShow(-1, cardNumber);
    });

    // Turn on the first slides (set the .style.display to "block")
    slideTheShow(0, cardNumber);
  });
};

function slideTheShow(direction, slideshowIndex) {
  //This function is called for each card!

  // Before we start, we select the slides relevant to the particular slideshow.
  // In our HTML file the slides have a class ending with a number of the slideshow, like ".mySlides2"
  // Neither slide nor card numbers are zero indexed,
  // so cardNumber is equal to slideshowIndex ("card1" corresponds to ".mySlides1" etc.)
  const className = ".mySlides" + slideshowIndex;
  const slides = document.querySelectorAll(className);
  if (direction === 0) {
    console.log(`card ${slideshowIndex} has ${slides.length} slides`);
  }

  // First we turn off the currently active slide

  // We need activeSlides[slideshowIndex - 1], because
  // (like all arrays) the activeSlides array is zero-indexed
  slides[activeSlides[slideshowIndex - 1]].style.display = "none";

  // Now we update the activeSlides array.

  activeSlides[slideshowIndex - 1] += direction;

  // Taking into accout the max number of slides for the card

  if (activeSlides[slideshowIndex - 1] === slides.length) {
    activeSlides[slideshowIndex - 1] = 0;
  } else if (activeSlides[slideshowIndex - 1] < 0) {
    activeSlides[slideshowIndex - 1] === slides.length - 1;
  };

  // Now we turn on the new slide (the activeSlides array has just been updated)

  slides[activeSlides[slideshowIndex - 1]].style.display = "block";
}

initialiseCards();
