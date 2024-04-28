const streams = [
  {
    title: "The Shawshank Redemption",
    description: "A classic tale of hope and redemption, following the story of Andy Dufresne, a man wrongly convicted of murder, as he befriends a fellow inmate and hatches a plan to escape the harsh realities of prison life.",
    thumbnail: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_k_h8_ad.jpg"
  },
  {
    title: "Parasite",
    description: "A darkly comedic thriller that delves into the themes of class disparity and societal division, telling the story of a poor family who schemes their way into working for a wealthy family, with unexpected and devastating consequences.",
    thumbnail: "https://media.newyorker.com/photos/5da4a5c756dcd400082a63ba/master/pass/Brody-Parasite.jpg"
  },
  {
    title: "Spirited Away",
    description: "A stunningly animated Japanese fantasy film from Hayao Miyazaki, following the journey of Chihiro, a young girl who enters the spirit world and must work in a bathhouse to free her parents and herself from a witch's curse.",
    thumbnail: "https://cdn.vox-cdn.com/thumbor/3iIP797HUyOGvHrQfygS19ezXqo=/0x0:1920x1038/1200x0/filters:focal(0x0:1920x1038):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/20004085/spirited_awaybr_disneyscreencaps.com_7828.jpg"
  },
  {
    title: "Inception",
    description: "A mind-bending sci-fi thriller from Christopher Nolan, exploring the world of dream-stealing and corporate espionage through the eyes of Dom Cobb, a professional thief who steals valuable information by entering people's dreams.",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*iDORznzOuAvrJz69b5tB8w.png"
  },
  {
    title: "Mad Max: Fury Road",
    description: "A high-octane action film set in a post-apocalyptic wasteland, following the story of Imperator Furiosa, a warrior who defies a tyrannical ruler and teams up with a group of women to escape his clutches.",
    thumbnail: "https://media.wired.co.uk/photos/606db251ef7fc504631937cb/16:9/w_2560%2Cc_limit/Mad-Max-3.jpg"
  }
];

const elements = {
  slideImagePreview: document.getElementById("slide-image-preview"),
  slideTitle: document.getElementById("slide-title"),
  slideDesc: document.getElementById("slide-desc"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  imageDots: document.getElementById("image-dots"),
};
let imageIndex = 0;
let intervalId;

function updateImage() {
  const { thumbnail, title, description } = streams[imageIndex];
  elements.slideImagePreview.src = thumbnail;
  elements.slideTitle.innerText = title;
  elements.slideDesc.innerText = description;
  updateImageDots();
}

function createImageDots() {
  streams.forEach((_, i) => {
    const dot = document.createElement("li");
    dot.className = "image-dot";
    dot.addEventListener("click", () => {
      clearInterval(intervalId);
      imageIndex = i;
      updateImage();
      intervalId = setInterval(nextImage, 5000);
    });
    elements.imageDots.appendChild(dot);
  });
}

function updateImageDots() {
  const dots = document.querySelectorAll(".image-dot");
  dots.forEach((dot, i) => dot.classList.toggle("active", i === imageIndex));
}

function nextImage() {
  imageIndex = (imageIndex + 1) % streams.length;
  updateImage();
}

function prevImage() {
  imageIndex = (imageIndex - 1 + streams.length) % streams.length;
  updateImage();
}

function handleButtonClick(action, interval) {
  clearInterval(intervalId);
  action();
  intervalId = setInterval(nextImage, 5000);
}

elements.prevBtn.addEventListener("click", () => handleButtonClick(prevImage, intervalId));
elements.nextBtn.addEventListener("click", () => handleButtonClick(nextImage, intervalId));

// Initialize the slideshow and image dots
createImageDots();
updateImage();

// Automatic slideshow every 3 seconds
intervalId = setInterval(() => nextImage(), 3000);


/** Movie List  **/
const allMoviearea = document.querySelector(".all-movie-area");

allMoviearea.innerHTML = `
  ${
    movieByGenre.map((genre, index) => {
      return `
      <section class="stream-section">
        <div class="title-movie"><h2>${genre.genre}</h2></div>
        <button class="slide-controll-btn slide-controll-btn-left" id="slide-controll-btn-left-${index}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="currentColor"></path></svg>
        </button>
        <div class="movies-list" id="movies-list-${index}">
            ${
              genre.movies.map(movie => {
                return `
                <div class="card">
                    <a href="../html/moviedetail.html">
                        <img src="${movie.posterURL}" alt="" class="card-image">
                        <span class="card-title">${movie.title}</span>
                    </a>
                </div>
                `;
              }).join('') // Added join to concatenate the inner movie cards
            }
        </div>
        <button class="slide-controll-btn slide-controll-btn-right" id="slide-controll-btn-right-${index}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" fill="currentColor"></path></svg>
        </button>
      </section>
      `;
    }).join('') // Added join to concatenate the outer stream sections
  }
`;


document.addEventListener('DOMContentLoaded', () => {

  const streamSections = document.querySelectorAll('.stream-section');
  streamSections.forEach((streamSection, index) => {
    const scrollContainer = streamSection.querySelector(`#movies-list-${index}`);
    const slideBtnLeft = streamSection.querySelector(`#slide-controll-btn-left-${index}`);
    const slideBtnRight = streamSection.querySelector(`#slide-controll-btn-right-${index}`);
    const scrollMoviesList = (direction) => {
      const scrollAmount = 500;
      if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    };

    const updateScrollButtons = () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft === 0) {
        slideBtnLeft.classList.add('hidden');
      } else {
        slideBtnLeft.classList.remove('hidden');
      }

      if (scrollContainer.scrollLeft >= maxScrollLeft - 1) {
        slideBtnRight.classList.add('hidden');
      } else {
        slideBtnRight.classList.remove('hidden');
      }
    };

    const handleScroll = () => {
      updateScrollButtons();
    };

    slideBtnLeft.addEventListener('click', () => {
      scrollMoviesList('left');
      updateScrollButtons();
    });

    slideBtnRight.addEventListener('click', () => {
      scrollMoviesList('right');
      updateScrollButtons();
    });

    // Initial update of scroll buttons
    updateScrollButtons();

    scrollContainer.addEventListener("scroll", handleScroll);
  });
});
