let moviesList=[];
let titleOrderCounter = 0;
let ratingOrderCounter = 0;

$('.movie-form').on('submit',function(e){
    e.preventDefault();
    
    let title = $('.movie-title')[0].value;
    let rating = $('.movie-rating')[0].value;
    let id = new Date().valueOf();

    if(title.length < 2){
        alert("Movie title must have at least 2 characters!")
    }
    if(!rating){
        alert("Movie must be rated!")
    }
    else{
        let newMovie = {title,rating,id};
        moviesList.push(newMovie);
        updateMovieTable();
        $('.movie-title')[0].value="";
        $('.movie-rating')[0].value="";
    }
    
})

function makeTableHTML(movie){
    return `<tr> <td>${movie.title}</td> <td>${movie.rating}</td> <td><button id=${movie.id}>X</button></td></tr>`;
}

function updateMovieTable(){
    $('.movie-table').find('td').remove();
    for(let movie of moviesList){
        $('.movie-table').append(makeTableHTML(movie));
    }
}

function removeFromMoviesList(idToRemove){
    moviesList = moviesList.filter((movie) => movie.id!=idToRemove);
}

function orderByTitle(a,b) {
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1;
    }
    return 0;
}

function orderByRating(a,b) {
    if (a.rating < b.rating){
      return -1;
    }
    if (a.rating > b.rating){
      return 1;
    }
    return 0;
}

$('.movie-table').on('click','button',function(e){
    removeFromMoviesList(e.target.id);
    updateMovieTable();
})

$('.movie-table').on('click','th',function(e){
    if(e.target.innerText==="Movie" && titleOrderCounter===0){
        moviesList.sort(orderByTitle);
        titleOrderCounter=1;
    }
    else if(e.target.innerText==="Rating" && ratingOrderCounter===0){
        moviesList.sort(orderByRating);
        ratingOrderCounter=1;
    }
    else if(e.target.innerText==="Movie" && titleOrderCounter===1){
        moviesList.reverse(orderByTitle);
        titleOrderCounter=0;
    }
    else if(e.target.innerText==="Rating" && ratingOrderCounter===1){
        moviesList.reverse(orderByRating);
        ratingOrderCounter=0;
    }
    updateMovieTable();
})





 //let id = new Date().valueOf();
        //$('.movie-table').append(`<tr> <td>${title}</td> <td>${rating}</td> <td><button>X</button></td></tr>`);