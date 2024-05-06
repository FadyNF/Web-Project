document.addEventListener("DOMContentLoaded", function() {
  // Select the discover button
  const discoverButton = document.querySelector(".discover-button");

  // Add event listener for button click
  discoverButton.addEventListener("click", function() {
    // Navigate to the new page
    window.location.href = "sourcing.html";
  });

  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const title = document.querySelector(".recycling-title");
  const description = document.querySelector(".recycling-desc");
  const image = document.querySelector(".image");

  const states = [
    {
      title: "Recycling and Packaging",
      description: "How to recycle ice packs: Follow the directions provided on your ice pack. Otherwise, cut open the pack, empty the gel into the trash, then rinse and recycle or discard the plastic film via in-store drop-off.",
      imageSrc: "recycle.png",
      imageAlt: "Recycle"
    },
    {
      title: "Recycling and Packaging",
      description: "How to recycle plastic. If your plastic packaging has the numbers 2 or 4 on it, it’s recyclable. If not, you can discard it in your regular trash bin.",
      imageSrc: "plastic.png",
      imageAlt: "Plastic Recycling"
    },
    {
      title: "Recycling and Packaging",
      description: "How to recycle insulation. Depending on the season, your box may include different insulators to keep ingredients fresh. Our corrugated liners, honeycombed paperboard, and ClimaCell plant-based insulation foam are all fully recyclable.",
      imageSrc: "paper.png",
      imageAlt: "Paper Recycling"
    }
  ];

  let currentStateIndex = 0;

  function updateElements(state) {
    title.textContent = state.title;
    description.textContent = state.description;
    image.src = state.imageSrc;
    image.alt = state.imageAlt;
  }

  updateElements(states[currentStateIndex]);

  rightArrow.addEventListener("click", function() {
    currentStateIndex = (currentStateIndex + 1) % states.length;
    updateElements(states[currentStateIndex]);
  });

  leftArrow.addEventListener("click", function() {
    currentStateIndex = (currentStateIndex - 1 + states.length) % states.length;
    updateElements(states[currentStateIndex]);
  });

  const zeroFoodWastedSquare = document.querySelector(".statistic.green-gradient");

  zeroFoodWastedSquare.addEventListener("mouseenter", function() {
    zeroFoodWastedSquare.style.background = "rgba(76, 175, 80, 0.8)"; 
  });

  zeroFoodWastedSquare.addEventListener("mouseleave", function() {
    zeroFoodWastedSquare.style.background = "linear-gradient(to bottom, #4CAF50, #81C784)"; 
  });
});
