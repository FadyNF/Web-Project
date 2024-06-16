document.addEventListener("DOMContentLoaded", function() {
  // Navigation for the "Discover" button
  const discoverButton = document.querySelector(".discover-button");
  discoverButton.addEventListener("click", function() {
    window.location.href = "sourcing.html";
  });

  // Slider navigation
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const dots = document.querySelectorAll(".dot");
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let currentSlideIndex = 0;

  function updateSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
  }

  function updateDots(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  rightArrow.addEventListener("click", function() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSlide(currentSlideIndex);
  });

  leftArrow.addEventListener("click", function() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSlide(currentSlideIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      currentSlideIndex = index;
      updateSlide(index);
    });
  });

  updateSlide(currentSlideIndex);

  // Typewriter effect
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const missionTitle = document.querySelector(".mission-title");
  const missionDesc = document.querySelector(".mission-desc");


  const states = [
    {
      title: "S",
      subtitle: "T",
      missionTitle: "O",
      missionDesc: "U"
    },
    {
      title: "Su",
      subtitle: "To",
      missionTitle: "Our",
      missionDesc: "At"
    },
    {
      title: "Sus",
      subtitle: "Tog",
      missionTitle: "Our M",
      missionDesc: "At F"
    },
    {
      title: "Sust",
      subtitle: "Toge",
      missionTitle: "Our Mi",
      missionDesc: "At Fr"
    },
    {
      title: "Susta",
      subtitle: "Toget",
      missionTitle: "Our Mis",
      missionDesc: "At Fre"
    },
    {
      title: "Sustai",
      subtitle: "Together",
      missionTitle: "Our Miss",
      missionDesc: "At Fres"
    },
    {
      title: "Sustain",
      subtitle: "Together,",
      missionTitle: "Our Missi",
      missionDesc: "At Fresh"
    },
    {
      title: "Sustaina",
      subtitle: "Together, ",
      missionTitle: "Our Missio",
      missionDesc: "At FreshB"
    },
    {
      title: "Sustainab",
      subtitle: "Together, l",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBi"
    },
    {
      title: "Sustainabi",
      subtitle: "Together, le",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBit"
    },
    {
      title: "Sustainabil",
      subtitle: "Together, let",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBite"
    },
    {
      title: "Sustainabili",
      subtitle: "Together, let'",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites,"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's ",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, "
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's c",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, w"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's cr",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's cre",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we'"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's crea",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we'r"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's creat",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're "
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create ",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're c"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're co"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a ",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're com"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a g",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're comm"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a gr",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're commi"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a gre",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committ"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a gree",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committ"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a green",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committe"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greene",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed "
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener ",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed t"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener w",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener wo",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to "
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener wor",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to p"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener worl",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pi"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pio"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pione"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pionee"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneer"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneeri"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneerin"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering "
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering s"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering su"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sus"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sust"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering susta"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustai"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustain"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustai"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustaina"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustainab"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustainabi"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustainabil"
    },
    {
      title: "Sustainability",
      subtitle: "Together, let's create a greener world.",
      missionTitle: "Our Mission",
      missionDesc: "At FreshBites, we're committed to pioneering sustainability"
    },
  ];

  let currentStateIndex = 0;

  function updateElements(state) {
    heroTitle.textContent = state.title;
    heroSubtitle.textContent = state.subtitle;
    missionTitle.textContent = state.missionTitle;
    missionDesc.textContent = state.missionDesc;
  }

  function typeWriter() {
    if (currentStateIndex < states.length) {
      updateElements(states[currentStateIndex]);
      currentStateIndex++;
      setTimeout(typeWriter, 100); // Adjust the typing speed here
    }
  }

  typeWriter();
});
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.slides');
  const slideArray = Array.from(document.querySelectorAll('.slide'));
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const dots = Array.from(document.querySelectorAll('.dot'));

  let currentStateIndex = 0;

  function updateElements(state) {
    heroTitle.textContent = state.title;
    heroSubtitle.textContent = state.subtitle;
    missionTitle.textContent = state.missionTitle;
    missionDesc.textContent = state.missionDesc;
  }

  function typeWriter() {
    if (currentStateIndex < states.length) {
      updateElements(states[currentStateIndex]);
      currentStateIndex++;
      setTimeout(typeWriter, 100); // Adjust the typing speed here
    }
  }

  typeWriter();

  // Interaction for zero food waste statistic
  const zeroFoodWastedSquare = document.querySelector(".statistic.green-gradient");

  zeroFoodWastedSquare.addEventListener("mouseenter", function() {
    zeroFoodWastedSquare.style.background = "rgba(76, 175, 80, 0.8)"; 
  });

  zeroFoodWastedSquare.addEventListener("mouseleave", function() {
    zeroFoodWastedSquare.style.background = "linear-gradient(to bottom, #4CAF50, #81C784)"; 
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const rings = document.querySelectorAll('.statistics-ring');

  rings.forEach(ring => {
      const percentage = ring.getAttribute('data-percentage');
      ring.style.setProperty('--percentage', percentage);

      setTimeout(() => {
          ring.style.animation = `fillRing 2s forwards`;
      }, 500);
  });
});
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav-bar");
  if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});