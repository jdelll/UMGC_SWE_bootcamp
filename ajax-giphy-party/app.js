console.log("Let's get this party started!");

const searchButton = document.querySelector("#getGifButton")
const removeButton = document.querySelector("#removeButton");
const gifSearch = document.querySelector('#gifSearch');
const gifContainer = document.querySelector('#gifContainer')

const url = 'https://api.giphy.com/v1/gifs/search';
const api_key = 'LPL40C8PtnSyqh6ADHCyimCfUg2mjZ7y';

async function getGif(q){
    const res = await axios.get(url, {
        headers: {
            'api_key': api_key,
            'q': q
        }
    });
    addGif(res.data);
}

function addGif(url){
    const newGif = document.createElement('img');
    newGif.src=url;
    newGif.classList.add("gif");
    gifContainer.appendChild(newGif);
}

searchButton.addEventListener('click',function(e){
    e.preventDefault();
    getGif(gifSearch.value);
    gifSearch.value="";
})

removeButton.addEventListener('click',function(e){
    e.preventDefault();
    gifContainer.innerHTML="";
})

