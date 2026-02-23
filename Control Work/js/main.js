const winterBtn = document.getElementById("winter");
const springBtn = document.querySelector("#spring");
const autumnBtn = document.querySelector("#autumn");
const summerBtn = document.querySelector("#summer");

const seasonData = {
  "winter": {
    list: ["December", "January", "February"],
    color: "linear-gradient(#0021ff, rgba(24, 216, 220, 0.45), rgba(73, 12, 73, 0.68))",
    picture: "https://i.pinimg.com/1200x/53/3a/0f/533a0f11f7bfda8b0fb6d1ab908fb973.jpg"
  },
  "spring": {
    list: ["March", "April", "May"],
    color: "linear-gradient(#378c0c, rgba(255, 255, 0, 0.64), rgba(0, 0, 255, 0.27))",
    picture: "https://i.pinimg.com/736x/be/53/91/be539151035312edd1ef2c2837999070.jpg"
  },
  "summer": {
    list: ["June", "July", "August"],
    color: "linear-gradient(#10e834, yellow , rgba(0, 0, 255, 0.68))",
    picture: "https://i.pinimg.com/736x/4a/6e/65/4a6e6598e8c9c1389d6b10fd08d836ab.jpg"
  },
  "autumn": {
    list: ["September", "October", "November"],
    color: "linear-gradient(orange , yellow , rgba(0, 0, 255, 0.63))" ,
    picture: "https://i.pinimg.com/736x/88/1d/0b/881d0bbdc9807a2ddf2ebbc1982d0a9a.jpg"
  },
};

function showSeason(seasonName) {
  const monthesContainer = document.querySelector(".monthes");
  monthesContainer.innerHTML = "";

  const seasonInfo = seasonData[seasonName];
  for (const monthName of seasonInfo.list) {
    const monthButton = createMonth(monthName, seasonInfo.color);
    monthesContainer.append(monthButton);
  }
  document.body.style.backgroundImage = "url(" + seasonInfo.picture + ")";
}

function createMonth(monthName, color) {
  const monthElement = document.createElement("button");
  monthElement.className = "season";
  monthElement.textContent = monthName;
  monthElement.style.backgroundImage = color;
  return monthElement;
}

winterBtn.addEventListener("click", () => showSeason("winter"));
springBtn.addEventListener("click", () => showSeason("spring"));
summerBtn.addEventListener("click", () => showSeason("summer"));
autumnBtn.addEventListener("click", () => showSeason("autumn"));