function countDown(number){
    let myInterval = setInterval(
        function (){
            number--;
            if(number<=0){
                clearInterval(myInterval);
                console.log("DONE!");
            }
            else{
            console.log(number);
            }
        },1000
    )
}

function randomGame(){
    let counter = 0;
    let random = 0;
    let myInterval = setInterval(
        function(){
            random = Math.random();
            //console.log(random);
            counter++;
            if(random>0.75)
            {
                clearInterval(myInterval);
                console.log(`${counter} tries before selecting a random number between 0 and 1 greater than 0.75`);
            }
        },1000
    )
}

//countDown(4);

randomGame();

