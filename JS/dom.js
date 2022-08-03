//movies api
const url = "https://yts.mx/api/v2/list_movies.json?limit=32";
//fetch movies api and use create card func as a callback function
fetch(url, createCards);

//access elements from html
let movieSection = document.querySelector(".movies");
let inputSearch = document.querySelector(".input-search");
let buttSearch = document.querySelector(".butt-search");

//search for movie
buttSearch.addEventListener("click", () => {
  fetch(
    `https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${inputSearch.value}`,
    createCards
  );
});
//function to create element
function createEle(ele, className, parent) {
  let element = document.createElement(ele);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
}

function createCards(data) {
  movieSection.innerHTML = "";
  data.data.movies.forEach((element) => {
    const card = createEle("div", "card", movieSection);

    const img = createEle("img", "img-card", card);
    img.setAttribute("src", `${element.medium_cover_image}`);

    const details = createEle("div", "details", card);

    const movieName = createEle("p", "p-movie-name", details);
    movieName.textContent = `${element.title}`;

    const movieRate = createEle("p", "p-movie-name", details);
    movieRate.textContent = `${element.rating}`;

    const summaryButt = createEle("button", "button", card);
    summaryButt.textContent = "More";
  });
}
// nader Section
//! music fetch nader section
let musicSection = document.querySelector("#musicSection");

fetch("https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024", musicDisply);

function musicDisply(data) {
  //   console.log(data.mvids);
  data.mvids.forEach((e) => {
    if (e.strTrackThumb != null) {
      //   console.log(e.strTrackThumb);
      // create elements Dom
      let musicDiv = document.createElement("div");
      let imgDiv = document.createElement("img");
      let divForText = document.createElement("div");
      let h2Div = document.createElement("h2");
      let aDiv = document.createElement("a");

      // add class names
      musicDiv.className = "imgDivAll";
      divForText.className = "overlay";
      imgDiv.className = "imgDiv";
      h2Div.className = "h2Name";

      // append the data
      imgDiv.src = e.strTrackThumb;
      h2Div.textContent = e.strTrack;
      aDiv.href = e.strMusicVid;
      aDiv.textContent = "See Video";

      // append divs to document
      musicDiv.appendChild(imgDiv);
      divForText.appendChild(h2Div);
      divForText.appendChild(aDiv);
      musicDiv.appendChild(divForText);
      musicSection.appendChild(musicDiv);
    }
  });
}

