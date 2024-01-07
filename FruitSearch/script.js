//user input search for fruit
const input = document.querySelector('#fruit');
//list of matching fruit
const suggestions = document.querySelector('.suggestions ul');
//all fruit to search against
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//checks if input string (case insensitive) is contained in any fruit in fruit array. returns array of objects for each matching fruit.  each object contains matching fruit, and start and end indices of matched search term
function search(str) {
	let results = [];

	for(let index in fruit){
		let foundIn = fruit[index].toLowerCase().indexOf(str.toLowerCase());
		if(foundIn > -1){
			results.push({'matchingFruit': fruit[index],'startMatchingSearchTerm':foundIn,'endMatchingSearchTerm':foundIn+str.length-1});
		}
	}

	return results;
}

//if empty string for input value display nothing instead of all fruit. if input value not empty string, then search input value and feed output matches to showSuggestions
function searchHandler(e) {
	e.preventDefault();
	if(input.value===""){
		document.querySelector('#suggestionsList').innerHTML="";
	}
	else{
		if(e.target.getAttribute('id')=='fruit' & input.value!==""){
        	let matches = search(input.value);
			//console.log(input.value)
			//console.log(matches);
			showSuggestions(matches,input.value);
		}
	}
}

//on call reset suggestionsList ul to empty, loop over all matching fruit, create a new li element for each, and add to suggestionsList with matching search term styled in bold
function showSuggestions(results, inputVal) {
	const suggestionsList = document.querySelector('#suggestionsList');
	suggestionsList.innerHTML="";
	for(let resultIndex in results){
		const newSuggestion = document.createElement('li');
    	newSuggestion.setAttribute('id',results[resultIndex].matchingFruit);
		let resultStringArray = Array.from(results[resultIndex].matchingFruit);
		for(let letterIndex in resultStringArray){
			const newLetter = document.createElement('span');
			newLetter.innerText = resultStringArray[letterIndex];
			if(letterIndex >= results[resultIndex].startMatchingSearchTerm & letterIndex <= results[resultIndex].endMatchingSearchTerm){
				newLetter.classList.add('bold');
			}
			newSuggestion.appendChild(newLetter);
		}
/* 		newSuggestion.innerText = results[index]; */
    	suggestionsList.appendChild(newSuggestion);
	}
}

//toggle highlight class
function highlight(e){
	e.target.classList.toggle('li:hover')
}

//when user clicks on search result, resets suggestionsList to empty and populates search bar with clicked result
function useSuggestion(e) {
	document.querySelector('#suggestionsList').innerHTML="";
	if(e.target.tagName === ("SPAN"))
	{
		input.value = e.target.parentNode.getAttribute('id');
	}
	else{
		input.value = e.target.getAttribute('id');
	}
}

//updates results with each key up
input.addEventListener('keyup', searchHandler);

//uses suggestion when search result is clicked
suggestions.addEventListener('click', useSuggestion);

//highlight or unhighlight search result on mouseover or mouseout respectively
suggestions.addEventListener('mouseover', highlight)
suggestions.addEventListener('mouseout', highlight)