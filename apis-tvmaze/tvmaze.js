"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const res = await axios.get('https://api.tvmaze.com/search/shows/', {
    params: {
        q: term,
    }
  });

  let showArray = [];

  for(let obj of res.data){
    showArray.push({
      "id": obj.show.id,
      "name": obj.show.name,
      "summary": obj.show.summary,
      "image": obj.show.image ? obj.show.image.medium : "https://tinyurl.com/missing-tv"
    });
  }

  return showArray;
}

/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="${show.name}"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes" id=${show.id}>
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

/*   let episodeArray = [];

  for(let obj of res.data){
    episodeArray.push({
      "id": obj.id,
      "name": obj.name,
      "season": obj.season,
      "number": obj.number
    });
  }

  return episodeArray; */

  //for loop less efficient.  javascript focuses on for loops, map can run while other processes go. can hinder performance for long search results
  return res.data.map((obj)=>{
    return {
      "id": obj.id,
      "name": obj.name,
      "season": obj.season,
      "number": obj.number
    }
  })
}

/** Write a clear docstring for this function... */

function populateEpisodes(episodes) {
  console.log(episodes);
  for(let episode of episodes){
    const newLi = document.createElement("li");
    //newLi.setAttribute('id',episode.id);
    newLi.innerText = `${episode.name} (season ${episode.season}, number ${episode.number})`;
    
    const episodesList = document.querySelector("#episodesList")
    episodesList.append(newLi);
  }
}

//functions inherit 'async.'  every time you call an async function inside another function you use await to call and then the parent function is also async
$showsList.on("click",".Show-getEpisodes",async function(e){
  e.preventDefault();
  const episodes = await getEpisodesOfShow(e.target.id);
  populateEpisodes(episodes);
  $episodesArea.toggle();
})
