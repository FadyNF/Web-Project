document.addEventListener("DOMContentLoaded", function () {
    // Select the discover button
    const discoverButton = document.querySelector(".discover-button");

    // Add event listener for button click
    discoverButton.addEventListener("click", function () {
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
            description:
                "How to recycle ice packs: Follow the directions provided on your ice pack. Otherwise, cut open the pack, empty the gel into the trash, then rinse and recycle or discard the plastic film via in-store drop-off.",
            imageSrc: "../images/sustainability/recycle.png",
            imageAlt: "Recycle",
        },
        {
            title: "Recycling and Packaging",
            description:
                "How to recycle plastic. If your plastic packaging has the numbers 2 or 4 on it, it’s recyclable. If not, you can discard it in your regular trash bin.",
            imageSrc: "../images/sustainability/plastic.png",
            imageAlt: "Plastic Recycling",
        },
        {
            title: "Recycling and Packaging",
            description:
                "How to recycle insulation. Depending on the season, your box may include different insulators to keep ingredients fresh. Our corrugated liners, honeycombed paperboard, and ClimaCell plant-based insulation foam are all fully recyclable.",
            imageSrc: "../images/sustainability/paper.png",
            imageAlt: "Paper Recycling",
        },
    ];

    let currentStateIndex = 0;

    function updateElements(state) {
        title.textContent = state.title;
        description.textContent = state.description;
        image.src = state.imageSrc;
        image.alt = state.imageAlt;
    }

    updateElements(states[currentStateIndex]);

    rightArrow.addEventListener("click", function () {
        currentStateIndex = (currentStateIndex + 1) % states.length;
        updateElements(states[currentStateIndex]);
    });

    leftArrow.addEventListener("click", function () {
        currentStateIndex =
            (currentStateIndex - 1 + states.length) % states.length;
        updateElements(states[currentStateIndex]);
    });

    const zeroFoodWastedSquare = document.querySelector(
        ".statistic.green-gradient"
    );

    zeroFoodWastedSquare.addEventListener("mouseenter", function () {
        zeroFoodWastedSquare.style.background = "rgba(76, 175, 80, 0.8)";
    });

    zeroFoodWastedSquare.addEventListener("mouseleave", function () {
        zeroFoodWastedSquare.style.background =
            "linear-gradient(to bottom, #4CAF50, #81C784)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const missionTitle = document.querySelector(".mission-title");
    const missionDesc = document.querySelector(".mission-desc");

    const states = [
        {
            title: "S",
            subtitle: "T",
            missionTitle: "O",
            missionDesc: "U",
        },
        {
            title: "Su",
            subtitle: "To",
            missionTitle: "Our",
            missionDesc: "At",
        },
        {
            title: "Sus",
            subtitle: "Tog",
            missionTitle: "Our M",
            missionDesc: "At F",
        },
        {
            title: "Sust",
            subtitle: "Toge",
            missionTitle: "Our Mi",
            missionDesc: "At Fr",
        },
        {
            title: "Susta",
            subtitle: "Toget",
            missionTitle: "Our Mis",
            missionDesc: "At Fre",
        },
        {
            title: "Sustai",
            subtitle: "Together",
            missionTitle: "Our Miss",
            missionDesc: "At Fres",
        },
        {
            title: "Sustain",
            subtitle: "Together,",
            missionTitle: "Our Missi",
            missionDesc: "At Fresh",
        },
        {
            title: "Sustaina",
            subtitle: "Together, ",
            missionTitle: "Our Missio",
            missionDesc: "At FreshB",
        },
        {
            title: "Sustainab",
            subtitle: "Together, l",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBi",
        },
        {
            title: "Sustainabi",
            subtitle: "Together, le",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBit",
        },
        {
            title: "Sustainabil",
            subtitle: "Together, let",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBite",
        },
        {
            title: "Sustainabili",
            subtitle: "Together, let'",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites,",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's ",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's c",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, w",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's cr",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's cre",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we'",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's crea",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we'r",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's creat",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create ",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're c",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're co",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a ",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're com",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a g",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're comm",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a gr",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're commi",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a gre",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a gree",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a green",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committe",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greene",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener ",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed t",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener w",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener wo",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener wor",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to p",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener worl",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pi",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pio",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pione",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pionee",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneer",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneeri",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneerin",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering ",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering s",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering su",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering sus",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering sust",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering susta",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering sustai",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering sustain",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc: "At FreshBites, we're committed to pioneering sustai",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc:
                "At FreshBites, we're committed to pioneering sustaina",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc:
                "At FreshBites, we're committed to pioneering sustainab",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc:
                "At FreshBites, we're committed to pioneering sustainabi",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc:
                "At FreshBites, we're committed to pioneering sustainabil",
        },
        {
            title: "Sustainability",
            subtitle: "Together, let's create a greener world.",
            missionTitle: "Our Mission",
            missionDesc:
                "At FreshBites, we're committed to pioneering sustainability",
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
