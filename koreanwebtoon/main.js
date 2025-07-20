// 모든 웹툰 데이터 (하나만 사용)
const webtoonsFull = [
  {
    title: "Omniscient Reader",
    genre: ["fantasy", "apokalypse"],
    rating: 9.91,
    image: "images/reader_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "Becoming the Monarch",
    genre: ["fantasy", "action"],
    rating: 9.80,
    image: "images/Monarch_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "Survive the Game as a Babarian",
    genre: ["fantasy", "apokalypse"],
    rating: 9.77,
    image: "images/babarian.jpg",
    link: "detailpage.html"
  },
  {
    title: "The Remarried Empress",
    genre: ["romance"],
    rating: 8.80,
    image: "images/remarried_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "Teenage Mercenary",
    genre: ["Action", "Drama"],
    rating: 9.55,
    image: "images/Teenage_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "The Regressed Mercenary Has a Plan",
    genre: ["Romance"],
    rating: 9.15,
    image: "images/regressed_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "The Price is Your Everything",
    genre: ["Romance"],
    rating: 8.85,
    image: "images/price_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "The Greatest Estate Developer",
    genre: ["Drama"],
    rating: 8.45,
    image: "images/estate_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "Reborn Rich",
    genre: ["Drama"],
    rating: 9.34,
    image: "images/reborn_main.jpg",
    link: "detailpage.html"
  },
  {
    title: "Solo Leveling",
    genre: ["Action", "Fantasy"],
    rating: 9.98,
    image: "images/solo_main2.webp",
    link: "detailpage.html"
  }

];

// ---------- 장르 검색 엔진 ----------

function displayGenreResults(genre) {
  const resultBox = document.getElementById("genre-result-box");
  resultBox.innerHTML = ""; // 기존 결과 제거

  const filtered = webtoonsFull.filter((w) =>
    w.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase())
  );

  if (filtered.length === 0) {
    resultBox.innerHTML = `<p>No results found for "${genre}".</p>`;
    return;
  }

  const heading = document.createElement("h4");
  heading.textContent = `Genre: ${genre}`;
  resultBox.appendChild(heading);

  filtered.forEach((w, i) => {
    const p = document.createElement("p");
    p.textContent = `${i + 1}. ${w.title}`;
    resultBox.appendChild(p);
  });
}

// 버튼 클릭 이벤트
document.querySelectorAll(".genre_button a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const genre = btn.textContent.trim().toLowerCase();
    displayGenreResults(genre);
  });
});

// 검색창 + 아이콘 클릭
const searchBtn = document.querySelector(
  '#genre-box .searching-bar a img[alt="searching_icon"]'
);
const searchInput = document.getElementById("genre-searching-bar");

searchBtn?.parentElement?.addEventListener("click", (e) => {
  e.preventDefault();
  const genre = searchInput.value.trim().toLowerCase();
  if (genre) {
    displayGenreResults(genre);
  }
});

// 엔터 키 입력
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const genre = searchInput.value.trim().toLowerCase();
    if (genre) {
      displayGenreResults(genre);
    }
  }
});

// ---------- 제목 검색 엔진 ----------

const titleInput = document.getElementById("main-searching-bar");
const titleBox = document.getElementById("title-searching-box");

function displayTitleResults(keyword) {
  // 기존 결과 제거
  const oldSections = document.querySelectorAll(".title-searching-result");
  oldSections.forEach((el) => el.remove());

  const filtered = webtoonsFull.filter((w) =>
    w.title.toLowerCase().includes(keyword.toLowerCase())
  );

  filtered.forEach((w) => {
    const section = document.createElement("section");
    section.className = "title-searching-result";

    const aImg = document.createElement("a");
    aImg.href = w.link;
    const img = document.createElement("img");
    img.src = w.image;
    img.alt = w.genre[0];
    aImg.appendChild(img);

    const textGroup = document.createElement("div");
    textGroup.className = "text-group";

    const aTitle = document.createElement("a");
    aTitle.href = w.link;
    const pTitle = document.createElement("p");
    pTitle.textContent = w.title;
    aTitle.appendChild(pTitle);

    const pRating = document.createElement("p");
    pRating.textContent = `rating: ${w.rating.toFixed(2)}`;

    const pGenre = document.createElement("p");
    pGenre.textContent = `genre: ${w.genre.join(", ")}`;

    textGroup.appendChild(aTitle);
    textGroup.appendChild(pRating);
    textGroup.appendChild(pGenre);

    section.appendChild(aImg);
    section.appendChild(textGroup);

    titleBox.appendChild(section);
  });
}

titleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const keyword = titleInput.value.trim();
    if (keyword) {
      displayTitleResults(keyword);
    }
  }
});
