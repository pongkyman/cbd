/* Personal content lives here. Replace values and file paths without touching layout code. */
const facts = [
  {
    label: "Current obsessions",
    value: "VALORANT and warnet, somehow she talks about it all the time",
  },
  { label: "Favorite food", value: "Sushi, of course" },
  { label: "Most used phrase", value: "“Aku cape deh”" },
  { label: "Small habit", value: "Always look down when burping" },
];

const littleThings = [
  {
    number: "01",
    label: "Food appreciation",
    text: 'The way you say "hmmmmm" when the food is nice.',
  },
  {
    number: "02",
    label: "Ugly faces",
    text: "The faces you make when you’re trying to mock someone.",
  },
  {
    number: "03",
    label: "Tenxi spotting",
    text: "The way you call someone Tenxi when you see someone wearing a streetwear outfit.",
  },
  {
    number: "04",
    label: "Every stupid mistake",
    text: "The way you always end the sentence with “hehe” when you make a stupid mistake.",
  },
  {
    number: "05",
    label: "Terrifying look",
    text: "The way you look at someone dead in the eye when you're really upset.",
  },
  {
    number: "06",
    label: "Shy smile (salting)",
    text: "The way you smile when you're embarrassed OR flattered.",
  },
  {
    number: "07",
    label: "Sleep",
    text: "The way you sleep at every second you got spare time.",
  },
  {
    number: "08",
    label: "Laugh",
    text: "The way you laugh really LOUD when you think something is funny.",
  },
  {
    number: "09",
    label: "Adeeek",
    text: 'The way you scream "ADEEEK" when you see a cute dog or cat.',
  },
];

const galleryItems = [
  {
    src: "images/wisuda.webp",
    alt: "Best picture of your graduation day.",
    title: "Wisuda",
    caption: "Best picture of your graduation day.",
    date: "May 2024",
    location: "JCC",
    shape: "portrait",
    rotation: "-90deg",
  },
  {
    src: "images/bird.webp",
    alt: "Happy bird",
    title: "Bird",
    caption: "A happy bird helmet of yours.",
    date: "May 2026",
    location: "Tamci",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/audi.webp",
    alt: "Happy bird",
    title: "Audi",
    caption: "You and Audi (and koko)",
    date: "January 2025",
    location: "Bonang",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/first gym.webp",
    alt: "First Gym Session",
    title: "First Gym",
    caption: "Your first gym session with awesome PT ofc.",
    date: "September 2025",
    location: "Maxxbox",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/jasujan.webp",
    alt: "Clara with Jas Hujan",
    title: "Jas Hujan",
    caption: "Your cute outfit ft. Jas Hujan Biru.",
    date: "February 2024",
    location: "TC",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/marah.webp",
    alt: "Clara Marah",
    title: "Mad Clara",
    caption: "Mad Clara, the one who always gets mad at me.",
    date: "February 2025",
    location: "Ciawi",
    shape: "portrait",
    rotation: "0deg",
  },
  {
    src: "images/masak.webp",
    alt: "Cooking Clara",
    title: "Cooking",
    caption: "Your cooking. *chef's kiss*.",
    date: "June 2026",
    location: "Tamci",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/sad.webp",
    alt: "Sad Clara",
    title: "Sad",
    caption: "The face you make when you hear something sad.",
    date: "February 2026",
    location: "Tamci",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/spiderman.webp",
    alt: "Spider-Man",
    title: "Spider-Man",
    caption: "You mocking Spider-Man at the theater.",
    date: "August 2026",
    location: "Lippo",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/sushi.webp",
    alt: "Sushi",
    title: "Sushi birthday",
    caption: "Your favorite meal at your special day.",
    date: "September 2025",
    location: "CP",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/hehe.webp",
    alt: "Clara and Mom",
    title: "Clara and My Mom",
    caption: "Two of my favorite people.",
    date: "November 2025",
    location: "Lippo",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/helm.webp",
    alt: "Helmet",
    title: "Nice Helmet",
    caption: "Nice helmet you got there (ondemande).",
    date: "September 2025",
    location: "Lippo",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/serious.webp",
    alt: "Serious Clara",
    title: "Serious",
    caption: "The face you make when you're doing something seriously.",
    date: "March 2024",
    location: "Semarang",
    shape: "wide",
  },
  {
    src: "images/wfc.webp",
    alt: "WFC",
    title: "WFC",
    caption:
      "Clara and her obsession with WFC (this is inside of a padel court).",
    date: "June 2026",
    location: "Lippo",
    shape: "portrait",
    rotation: "90deg",
  },
  {
    src: "images/supi.webp",
    alt: "Supi the cat",
    title: "Supi the Cat",
    caption: "Clara and Supi the Cat (it's actually pussy).",
    date: "May 2026",
    location: "Tamci",
    shape: "portrait",
    rotation: "90deg",
  },
];

const voiceNotes = [
  {
    archive: "041",
    name: "Katherine",
    description: "A message from the owner of the Huka house.",
    src: "audio/ketrin.ogg",
    duration: "0:29",
  },
  {
    archive: "042",
    name: "Kimi",
    description: "A few words from Taiwan.",
    src: "audio/kimi.mp4",
    duration: "0:23",
  },
  {
    archive: "043",
    name: "Michelle",
    description: "This one is actually extra, she gave me a video.",
    src: "audio/misyel.mp3",
    duration: "0:23",
  },
  {
    archive: "044",
    name: "Selvi",
    description: "A kind message from Selvi.",
    src: "audio/selvi.mp4",
    duration: "0:25",
  },
  {
    archive: "045",
    name: "Step",
    description: "Voice note from one of your TS",
    src: "audio/step.mp4",
    duration: "0:39",
  },
  {
    archive: "046",
    name: "Vicky",
    description: "Audio from Vicky, very short one. But she sincerely said it.",
    src: "audio/viki.ogg",
    duration: "0:03",
  },
  {
    archive: "047",
    name: "Shannon",
    description: "mp3 from Shannon, the author of the infamous hashtag",
    src: "audio/syenen.ogg",
    duration: "0:23",
  },
  {
    archive: "048",
    name: "Jovina",
    description: "Audio from Jovina, the one who left pespor *hiks",
    src: "audio/jovina.ogg",
    duration: "1:53",
  },
  {
    archive: "049",
    name: "Devi",
    description: "Audio from Devi, who somehow named 'Thomas' in your phone",
    src: "audio/devi.ogg",
    duration: "0:15",
  },
  {
    archive: "050",
    name: "Rindy",
    description: "Audio from Rindy, short but effective",
    src: "audio/rindy.ogg",
    duration: "0:03",
  },
  {
    archive: "051",
    name: "Deya",
    description: "Kind audio note from Deya",
    src: "audio/deya.mp4",
    duration: "0:07",
  },
  {
    archive: "052",
    name: "Dita",
    description: "Message from Dita",
    src: "audio/Dita.ogg",
    duration: "0:22",
  },
  {
    archive: "053",
    name: "Kya",
    description: ".mp3 from Kya",
    src: "audio/kya.ogg",
    duration: "0:12",
  },
];

const finalVoiceNote = {
  archive: "050",
  name: "One last voice",
  description: "For the final page.",
  src: "audio/pong2.ogg",
  duration: "1:17",
};

const factIndex = document.querySelector("#fact-index");
facts.forEach((fact, index) => {
  factIndex.insertAdjacentHTML(
    "beforeend",
    `<article class="fact"><p class="fact__number">A.${String(index + 1).padStart(2, "0")}</p><p class="fact__label">${fact.label}</p><p class="fact__value">${fact.value}</p></article>`,
  );
});

const observations = document.querySelector("#observations");
littleThings.forEach((item) => {
  observations.insertAdjacentHTML(
    "beforeend",
    `<article class="observation reveal"><div><span>No. ${item.number}</span><span>${item.label}</span></div><p>${item.text}</p></article>`,
  );
});

const gallery = document.querySelector("#gallery");
galleryItems.forEach((item) => {
  const rotation = item.rotation || "0deg";
  const isSideways = Math.abs(parseFloat(rotation)) % 180 === 90;

  gallery.insertAdjacentHTML(
    "beforeend",
    `<figure class="gallery-item gallery-item--${item.shape.replace(" ", " gallery-item--")} reveal"><div class="image-wrap${isSideways ? " image-wrap--sideways" : ""}"><img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" style="--rotation: ${rotation}"></div><figcaption><p>${item.title}</p><p>${item.caption}</p><p>${item.location} · ${item.date}</p></figcaption></figure>`,
  );
});

gallery.querySelectorAll(".image-wrap--sideways img").forEach((image) => {
  const fitRotatedImage = () => {
    const sourceRatio = image.naturalWidth / image.naturalHeight;
    image.parentElement.style.aspectRatio = `${image.naturalHeight} / ${image.naturalWidth}`;
    image.style.setProperty("--source-ratio", sourceRatio);
  };

  if (image.complete) fitRotatedImage();
  else image.addEventListener("load", fitRotatedImage, { once: true });
});

const audioTemplate = (note, isFinal = false) => `
  <article class="audio-record${isFinal ? " audio-record--final" : " reveal"}">
    <div class="audio-record__heading"><p>Archive ${note.archive}</p><h3>${note.name}</h3><p>${note.description}</p></div>
    <div class="audio-player" data-audio-src="${note.src}">
      <button class="audio-player__toggle" type="button" aria-label="Play ${note.name}"><span aria-hidden="true">▶</span></button>
      <div class="audio-player__track">
        <div class="audio-player__meta"><span class="audio-player__status">Listen</span><span><span class="audio-player__current">0:00</span> / <span class="audio-player__duration">${note.duration}</span></span></div>
        <div class="audio-player__progress" role="slider" tabindex="0" aria-label="Audio progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
      </div>
    </div>
  </article>`;

document.querySelector("#voice-list").innerHTML = voiceNotes
  .map((note) => audioTemplate(note))
  .join("");
document.querySelector("#final-voice").innerHTML = audioTemplate(
  finalVoiceNote,
  true,
);

let activeAudio = null;
document.querySelectorAll(".audio-player").forEach((player) => {
  const button = player.querySelector(".audio-player__toggle");
  const icon = button.querySelector("span");
  const status = player.querySelector(".audio-player__status");
  const current = player.querySelector(".audio-player__current");
  const duration = player.querySelector(".audio-player__duration");
  const progress = player.querySelector(".audio-player__progress");
  const fill = progress.querySelector("span");
  let audio;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";
    return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
  };

  const ensureAudio = () => {
    if (audio) return audio;
    audio = new Audio(player.dataset.audioSrc);
    audio.preload = "metadata";
    audio.addEventListener("loadedmetadata", () => {
      duration.textContent = formatTime(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      const percent = audio.duration
        ? (audio.currentTime / audio.duration) * 100
        : 0;
      fill.style.width = `${percent}%`;
      current.textContent = formatTime(audio.currentTime);
      progress.setAttribute("aria-valuenow", Math.round(percent));
    });
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("ended", () => setPlaying(false));
    audio.addEventListener("error", () => {
      setPlaying(false);
      status.textContent = "Add audio file";
    });
    return audio;
  };

  const setPlaying = (playing) => {
    icon.textContent = playing ? "Ⅱ" : "▶";
    status.textContent = playing ? "Playing" : "Listen";
    button.setAttribute(
      "aria-label",
      `${playing ? "Pause" : "Play"} ${player.closest(".audio-record").querySelector("h3").textContent}`,
    );
    player.classList.toggle("is-playing", playing);
  };

  button.addEventListener("click", async () => {
    const instance = ensureAudio();
    if (activeAudio && activeAudio !== instance) activeAudio.pause();
    if (instance.paused) {
      activeAudio = instance;
      try {
        await instance.play();
        setPlaying(true);
      } catch {
        status.textContent = "Add audio file";
      }
    } else {
      instance.pause();
      setPlaying(false);
    }
  });

  const seek = (clientX) => {
    const instance = ensureAudio();
    if (!instance.duration) return;
    const rect = progress.getBoundingClientRect();
    instance.currentTime =
      Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) *
      instance.duration;
  };
  progress.addEventListener("click", (event) => seek(event.clientX));
  progress.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const instance = ensureAudio();
    instance.currentTime = Math.max(
      0,
      Math.min(
        instance.duration || 0,
        instance.currentTime + (event.key === "ArrowRight" ? 5 : -5),
      ),
    );
  });
});

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (reducedMotion || !("IntersectionObserver" in window)) {
  document
    .querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5%" },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
}

const collageIntro = document.querySelector("#collage-intro");
const collage = document.querySelector("#collage");
const collageCloseControls = collageIntro?.querySelectorAll(
  "[data-collage-close]",
);
const collageImages = [
  ...galleryItems,
  {
    src: "images/dr clara.webp",
    alt: "A portrait of Clara",
  },
  {
    src: "images/dogg.webp",
    alt: "A dog from the archive",
  },
];

if (collageIntro && collage && collageCloseControls) {
  collage.innerHTML = collageImages
    .map(
      (image, index) => `
        <div class="collage__item" style="--collage-index: ${index}; --collage-rotation: ${index % 2 ? "1.5deg" : "-1.5deg"};">
          <img src="${image.src}" alt="${image.alt}" loading="eager" decoding="async" />
        </div>`,
    )
    .join("");

  const coverAction = document.querySelector(".open-book");

  const closeCollage = () => {
    collageIntro.classList.remove("is-open");
    document.body.classList.remove("is-collage-open");
    coverAction?.focus();
  };

  collageIntro.classList.add("is-open");
  document.body.classList.add("is-collage-open");
  collageCloseControls[collageCloseControls.length - 1].focus();

  collageCloseControls.forEach((control) => {
    control.addEventListener("click", closeCollage);
  });
  collageIntro.addEventListener("click", (event) => {
    if (event.target === collageIntro) closeCollage();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && collageIntro.classList.contains("is-open")) {
      closeCollage();
    }
  });
}

const cover = document.querySelector("[data-interactive-cover]");
const openBook = cover?.querySelector(".open-book");
const openingLetter = document.querySelector("#opening-letter");

if (cover && openBook && openingLetter) {
  const setCoverPosition = (clientX, clientY) => {
    const bounds = cover.getBoundingClientRect();
    const x = Math.max(
      -1,
      Math.min(1, ((clientX - bounds.left) / bounds.width) * 2 - 1),
    );
    const y = Math.max(
      -1,
      Math.min(1, ((clientY - bounds.top) / bounds.height) * 2 - 1),
    );
    cover.style.setProperty("--cover-x", Math.round(x * 14));
    cover.style.setProperty("--cover-y", Math.round(y * 14));
  };

  const resetCoverPosition = () => {
    cover.style.setProperty("--cover-x", "0");
    cover.style.setProperty("--cover-y", "0");
  };

  cover.addEventListener("pointermove", (event) => {
    if (!reducedMotion && !cover.classList.contains("is-opening")) {
      setCoverPosition(event.clientX, event.clientY);
    }
  });
  cover.addEventListener("pointerleave", resetCoverPosition);
  cover.addEventListener("pointercancel", resetCoverPosition);

  openBook.addEventListener("click", (event) => {
    if (cover.classList.contains("is-opening")) return;
    event.preventDefault();
    cover.classList.add("is-opening");
    openBook.setAttribute("aria-disabled", "true");

    window.setTimeout(
      () => {
        openingLetter.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
        });
        openingLetter.focus({ preventScroll: true });
        history.replaceState(null, "", "#opening-letter");
      },
      reducedMotion ? 0 : 650,
    );
  });

  window.addEventListener("hashchange", () => {
    if (window.location.hash !== "#top") return;
    cover.classList.remove("is-opening");
    openBook.removeAttribute("aria-disabled");
    resetCoverPosition();
  });
}
