// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/*
shuffle array method 
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {

    const response = await axios({
        url: "https://rithm-jeopardy.herokuapp.com/api/categories?count=14",
        method: "GET",
      });

    let allIds = response.data.map(function(ele){
        return ele.id;
    });

    shuffle(allIds);
    
    let categoryIds = allIds.slice(0,6); 

    return categoryIds;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {

    const response = await axios({
        url: `https://rithm-jeopardy.herokuapp.com/api/category?id=${catId}`,
        method: "GET",
      });

      return {
        title: response.data.title,
        clues: response.data.clues.map(function(ele){
            return {
                question: ele.question,
                answer: ele.answer,
                showing: null
            };
        })
    };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    let headers = document.querySelectorAll("th");
    for(let index in categories){
        headers[index].innerText=categories[index].title;
    }

    let cells = document.querySelectorAll("td");
    for(let cell of cells){
        cell.innerText = "?";
    }
        
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    let coord = evt.target.id;
    let x = coord.slice(-1);
    let y = coord.slice(0,1);
    let clue = categories[x].clues[y];
    if(clue.showing=="question"){
        clue.showing = "answer";
        evt.target.innerText = clue.answer;
    }
    else if(clue.showing==null){
        clue.showing = "question";
        evt.target.innerText = clue.question;
    }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

/*
Table is wiped in event handler
*/

function showLoadingView() {
    let loader = document.createElement('div');
    loader.classList.add("loader");
    document.body.appendChild(loader);
}

/** Remove the loading spinner and update the button used to fetch data. */

/*
Button is updated in event handler
*/
function hideLoadingView() {
    let loader = document.querySelector(".loader");
    loader.remove();
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    //get 6 random categories and add q and clues to categories[]
    showLoadingView();
    const catIds = await getCategoryIds();
    categories = [];
    for(let id of catIds){
        let category = await getCategory(id);
        categories.push(category);
    }
    
    //create table
    const table = document.createElement('table');

    //create table header
    const tableHeader = document.createElement('thead')
    const headerRow = document.createElement('tr');
    headerRow.setAttribute('id',"header")

    for (let x = 0; x < 6; x++) {
        const cell = document.createElement('th');
        cell.setAttribute('id', `0-${x}`);
        headerRow.appendChild(cell);
    }

    table.appendChild(headerRow)

    //create table body
    const tableBody = document.createElement('tbody');
    for (let y = 1; y < 6; y++) {
        const row = document.createElement('tr');
    
        for (let x = 0; x < 6; x++) {
          const cell = document.createElement('td');
          cell.setAttribute('id', `${y}-${x}`);
          row.appendChild(cell);
        }
    
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    hideLoadingView(); 

    document.querySelector("body").appendChild(table);

    fillTable();
}

/** On click of start / restart button, set up game. */

document.querySelector("button").addEventListener("click",function(e){
    e.preventDefault();
    if(e.target.innerText=="Restart!"){
        document.querySelector("table").remove();
    }
    setupAndStart();
    e.target.innerText = "Restart!"
    
  })
  

/** On page load, add event handler for clicking clues */

document.addEventListener("click",function(e){
    if(e.target.tagName === ("TD")){
        handleClick(e);
    }
})

// TODO
