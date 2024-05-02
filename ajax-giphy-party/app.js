console.log("Let's get this party started!");

const searchButton = document.querySelector("#getGifButton")
const removeButton = document.querySelector("#removeButton");
const gifSearch = document.querySelector('#gifSearch');
const gifContainer = document.querySelector('#gifContainer')

const url = 'http://api.giphy.com/v1/gifs/search';
const api_key = 'M3a4EXWzuWJqnnChOXCRRWVCXI1fn9VP';
const limit = 1;

async function getGif(q){
    //const res = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q={q}&limit=1`);
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q,
            api_key,
            limit
        }
    });
    
    addGif(res.data.data[0].images.fixed_height.url);
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

