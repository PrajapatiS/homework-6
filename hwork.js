

// makeTraveler(name)

function makeTraveler(name){
    return {
        name: name,
        amount: 100,
        Ishealthy:true,
    };
}
let amount=0;
Ishealthy=true;


//makeWagon(capacity)

function makeWagon(capacity){

    return{
            capicity: capacity,
            passager: [],
    };
}

//eat(Traveler)

function eat(traveler){
    
    if(traveler.amount<=20){
        traveler.Ishealthy=false;
        console.log('not healthy');
    }else{
        traveler.amount= traveler.amount-20;
        console.log('healthy');
    }
}
    
// hunt traveler
function hunt(traveler) {
    // If we have a successful hunt, add 100 food
    if (Math.random() > 0.5) {
        traveler.amount=traveler.amount+100;
    }
}

let person = makeTraveler('Suman');

console.log(person);
eat(person);
console.log(person);

console.log(Math.random());


//join wegon,Traveler
join(wegon, traveler);
join(wegon,traveler2)



///food(wegon)

function food(wegon){

      let total=0;
      total=total+wegon;
      console.log(total);

    return total;
}

/// quaratine(wegon)

let unhealthy=0;
function quaratine(person){
    if(person.unhealthy===0){
        return true;
        console.log('person healthy');
    }else{
        return false;
        console.log('All healthy');
    }
    
}

