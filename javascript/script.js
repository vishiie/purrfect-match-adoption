// Featured kitten carousel
// Stores the info for each kitten in a array.

const kittens = [
    {
        image: "media/jinx.jpg",
        name: "Jinx | Female | 9 months",
        description: "Sassy and cuddly kitten who loves to explore."
    },
    {
        image: "media/peanut.jpg",
        name: "Peanut | Female | 7 months",
        description: "Playful and curious kitten who loves attention."
    },
    {
        image: "media/basic.jpg",
        name: "Basic | Male | 8 months",
        description: "Sassy and cuddly kitten who loves attention."
    },
    {
        image: "media/bed__bug_.jpg",
        name: "Bed + Bug | Male + Female | 6 months",
        description: "Brother and sister, both love cuddles."
    },
    {
        image: "media/french_fry.jpg",
        name: "French Fry | Male | 8 months",
        description: "Playful and curious kitten who loves attention."
    },
    {
        image: "media/smelly.jpg",
        name: "Smelly | Female | 8 months",
        description: "Sweet and energetic kitten who loves to chase toys."
    }
];


// HOME PAGE CAROUSEL
// Displayes featured kittens on the hompagge, users can click next and prev buttons.

const carouselImage = document.getElementById("carouselImage");


if (carouselImage) {

    let currentKitten = 0;

    const kittenName = document.querySelector(".homeIntro .kittenCard h3");
    const kittenDescription = document.querySelector(".homeIntro .kittenCard p");
    const dots = document.querySelectorAll(".dot");

    function showKitten(index) {

        currentKitten = index;

        carouselImage.src = kittens[index].image;
        carouselImage.alt = kittens[index].name;

        kittenName.textContent = kittens[index].name;
        kittenDescription.textContent = kittens[index].description;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }


    document.querySelector(".next").addEventListener("click", function () {

        currentKitten++;

        if (currentKitten >= kittens.length) {
            currentKitten = 0;
        }

        showKitten(currentKitten);
    });


    document.querySelector(".prev").addEventListener("click", function () {

        currentKitten--;

        if (currentKitten < 0) {
            currentKitten = kittens.length - 1;
        }

        showKitten(currentKitten);
    });


    setInterval(function () {

        currentKitten++;

        if (currentKitten >= kittens.length) {
            currentKitten = 0;
        }

        showKitten(currentKitten);

    }, 5000);
}

// ADOPTION PAGE CAROUSEL
// displays kitten image son adoption page, allows next and prev button.

const adoptionCarouselImage = document.getElementById("adoptionCarouselImage");

if (adoptionCarouselImage) {

    let currentAdoptionKitten = 0;

    function showAdoptionKitten(index) {

        currentAdoptionKitten = index;

        adoptionCarouselImage.src = kittens[index].image;
        adoptionCarouselImage.alt = kittens[index].name;
    }


    document.querySelector(".adoptionNext").addEventListener("click", function () {

        currentAdoptionKitten++;

        if (currentAdoptionKitten >= kittens.length) {
            currentAdoptionKitten = 0;
        }

        showAdoptionKitten(currentAdoptionKitten);
    });


    document.querySelector(".adoptionPrev").addEventListener("click", function () {

        currentAdoptionKitten--;

        if (currentAdoptionKitten < 0) {
            currentAdoptionKitten = kittens.length - 1;
        }

        showAdoptionKitten(currentAdoptionKitten);
    });

}


// KITTENS PAGE - CLEAR FILTERS
// Allows users to clear the filter selvetion

const clearFilters = document.getElementById("clearFilters");

if (clearFilters) {

    clearFilters.addEventListener("click", function() {

        document.getElementById("kittenSearch").value = "";

        document.getElementById("ageFilter").selectedIndex = 0;

        document.getElementById("genderFilter").selectedIndex = 0;

        document.getElementById("needsFilter").selectedIndex = 0;

    });

}

// Kittens page - read aloud
const readAloud = document.getElementById("readAloud");

if (readAloud) {

    readAloud.addEventListener("click", function() {

        const text = document.querySelector("main").innerText;

        const speech = new SpeechSynthesisUtterance(text);

        speechSynthesis.cancel();
        speechSynthesis.speak(speech);

    });

}


// Contact Page
// Scrolls to the contact detail sheet.

const contactButton = document.querySelector(".contactIntroButton");

if (contactButton) {
    contactButton.addEventListener("click", function (event) {
        event.preventDefault();

        const contactDetails = document.getElementById("contactDetails");

        if (contactDetails) {
            const position = contactDetails.getBoundingClientRect().top
                + window.scrollY;

            window.scrollTo({
                top: position + 470,
                behavior: "smooth"
            });
        }
    });
}