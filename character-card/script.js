document.addEventListener("DOMContentLoaded", () => {
  const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",
    //
    attacked() {
      if (this.health >= 20) {
        this.health -= 20;
      } else {
        alert("Character Died");
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
    },
  };

  const imageCh = document.querySelector(".image");
  const nameCh = document.querySelector(".name");
  const statsCh = document.getElementById(".stats");
  const classCh = document.getElementById("class");
  const levelCh = document.getElementById("level");
  const healthCh = document.getElementById("health");
  const attackBtn = document.getElementById("attacked");
  const levelUpBtn = document.getElementById("levelup");

  function updateUI() {
    imageCh.src = character.image;
    imageCh.alt = character.name;
    nameCh.textContent = character.name;
    classCh.textContent = character.class;
    levelCh.textContent = character.level;
    healthCh.textContent = character.health;
  }

  attackBtn.addEventListener("click", () => {
    character.attacked();
    updateUI();
  });

  levelUpBtn.addEventListener("click", () => {
    character.levelUp();
    updateUI();
  });

  updateUI();
});
