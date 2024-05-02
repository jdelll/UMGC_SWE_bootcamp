//old way
//need to nest requests that are dependent on each other
//no one does this anymore

/* const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function(){
    console.log(this.responseText);
});
firstReq.addEventListener('error', () => {
    console.log('Error!!!!');
})
firstReq.open('GET','https://swapi.co/api/planets/');
firstReq.send();
console.log("SENDING REQUEST....") */

//new way

/* async function getData(){
    const response = await axios.get('https://swapi.dev/api/planets');
    const { next, results } = response.data;
    console.log(next);
    for (let planet of results){
        console.log(planet.name);
    }
    const response2 = await axios.get(next);
    console.log(response2.data.results);
    for(let planet of results){
        console.log(planet.name);
    }
}

getData();
console.log("THIS LINE IS AFTER AXIOS.GET");


 */

const getLaunchesButton = document.querySelector("#getLaunchesButton");
getLaunchesButton.addEventListener('click',function(event){
    getLaunches();
});


async function getLaunches(){
    const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    const ul = document.querySelector("#launches");
    console.log(res);
    for(let launch of res.data){
        const newLi = document.createElement('LI');
        const mission = document.createElement('B');
        mission.innerText = launch.mission_name;
        newLi.append(mission);
        newLi.innerHTML += ` - ${launch.rocket.rocket_name}`;
        ul.append(newLi);
        console.log(launch.mission_name);
        console.log(launch.rocket.rocket_name);

    }
}

async function getDogBreed(breed){
    try{
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
        const res = await axios.get(url);
        const img = document.querySelector("#dog");
        img.src = res.data.message;
    } catch(e){
        alert("Breed not found. ");
    }
}


//axios.get("/resource",{params: a:1,b:2})
//axios.post(url,[data],[config])

async function getUsers(){
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
}

async function createUser(){
    const res = await axios.post('http://reqres.in/api/users', {usernames: 'butter', email: 'butter@gmail.com', age: 1});
    console.log(res);
}


async function signUp(username, password, name){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {user: {name, username, password}});
    console.log(res);
}

async function login(username, password){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user: {username, password}});
    console.log(res);
    return res.data.token;
}

async function getUsersWithAuth(){
    const token = await login('butterschicken', '2381239');
    getUsers(token);
}

getUsersWithAuth();

async function createStory(){
    const token = await login('butterschicken', '2381239');
    const newStory = {
        token,
        story: {
            author: 'butter',
            title: 'bock bock bock',
            url: 'www.chickens.com'
        }
    }
    axios.post("https:/hack-or-snooze-v3.herokuapp.com/stories",)
}