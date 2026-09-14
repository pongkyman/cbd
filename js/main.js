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
    text: "The way you call someone Tenxi when you see someone wearing a streetwear.",
  },
  {
    number: "04",
    label: "Every stupid mistake",
    text: "The way you always ends the sentence with “hehe” when you make a stupid mistake.",
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
];

const galleryItems = [
  {
    src: "images/archive-portrait.jpg",
    alt: "A quiet portrait by a sunlit window",
    title: "Photograph 017",
    caption: "The quiet kind of afternoon.",
    date: "March 2026",
    location: "At home",
    shape: "portrait",
  },
  {
    src: "images/archive-coast.jpg",
    alt: "A figure walking on a beach at dusk",
    title: "Collection 03 / 018",
    caption: "Somewhere the sky felt bigger.",
    date: "April 2026",
    location: "By the sea",
    shape: "wide",
  },
  {
    src: "images/archive-laugh.jpg",
    alt: "A candid laugh at a cafe table",
    title: "Photograph 019",
    caption: "Mid-sentence, then this.",
    date: "May 2026",
    location: "The usual table",
    shape: "portrait small",
  },
];

const voiceNotes = [
  {
    archive: "041",
    name: "Katherine",
    description: "A message from owner of Huka house.",
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
];

const finalVoiceNote = {
  archive: "050",
  name: "One last voice",
  description: "For the final page.",
  src: "audio/from-me.mp3",
  duration: "1:18",
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
  gallery.insertAdjacentHTML(
    "beforeend",
    `<figure class="gallery-item gallery-item--${item.shape.replace(" ", " gallery-item--")} reveal"><div class="image-wrap"><img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async"></div><figcaption><p>${item.title}</p><p>${item.caption}</p><p>${item.location} · ${item.date}</p></figcaption></figure>`,
  );
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
