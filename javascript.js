const cardsElement = document.querySelectorAll(".card");
const activeSlides = [];
for (let i = 0; i < cardsElement.length; i++) {
  activeSlides.push(0);
};

initialiseCards = () => {
  for (let cardNumber = 0; cardNumber < cardsElement.length; cardNumber++) {
    let card = cardsElement[cardNumber];

    // Expanding and collapsing the card

    card.addEventListener("click",() => {
      //Collapse all cards
      cardsElement.forEach(card => {
          card.classList.remove("active");
          card.querySelector(".introContainer").style.display = "none";
          card.querySelector(".slideshow-container").style.display = "none";
      });
      //Expand the card that was clicked
      card.classList.add("active");
      card.querySelector(".introContainer").style.display = "flex";
      card.querySelector(".slideshow-container").style.display = "block";
    });

    const closeButton = card.querySelector(".collapse");
    //Need the if statement for it to work without all the close buttons implemented
    if (closeButton) {
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        card.classList.remove("active");
        card.querySelector(".introContainer").style.display = "none";
        card.querySelector(".slideshow-container").style.display = "none";
      });
    } else {
      console.log(`No close button in card ${cardNumber + 1}`);
    };

    // Dealing with the slides

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
  };
};

function slideTheShow(direction, slideshowIndex) {
  //This function is called for each card!

  // Before we start, we select the slides relevant to the particular slideshow.
  // In our HTML file the slides have a class ending with a number of the slideshow, like ".mySlides2"

  // const nodeParent = 
  //   document.querySelector(`#card${slideshowIndex + 1}`);
  const slides =
     cardsElement[slideshowIndex].querySelectorAll("div[class^='mySlides']");


  // First we turn off the currently active slide

  // We need activeSlides[slideshowIndex - 1], because
  // (like all arrays) the activeSlides array is zero-indexed
  slides[activeSlides[slideshowIndex]].style.display = "none";

  // Now we update the activeSlides array.

  activeSlides[slideshowIndex] += direction;

  // Taking into accout the max number of slides for the card

  if (activeSlides[slideshowIndex] === slides.length) {
    activeSlides[slideshowIndex] = 0;
  } else if (activeSlides[slideshowIndex] < 0) {
    activeSlides[slideshowIndex] = slides.length - 1;
  };

  // Now we turn on the new slide (the activeSlides array has just been updated)

  slides[activeSlides[slideshowIndex]].style.display = "block";
}

initialiseCards();
