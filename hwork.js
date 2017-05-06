

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
            passenger: [],
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

let wagon= makeWagon(1);
console.log(wagon);
 function join(wagon, traveler){
     if(wagon.capacity=== traveler.length){
         wagon.passenger.push(traveler);
     }else{
         console.log('no capicity');
     }

 }
console.log(join(wagon,person))
 console.log(wagon);
/// quaratine(wegon)


function quaratine(wagon){
    let Ishealthy=0;
    
    for(let i=0; i<wagon.passenger.length; i++){
    if(wagon.passenger[i].Ishealthy===0){
        Ishealthy=true;
        console.log('person healthy');
    }else{
        Ishealthy= false;
        console.log('peeson not healthy');
    }
}
   return Ishealthy;
}
console.log(quaratine(wagon));
///food(wegon)

function food(wagon){
    let total=0;
   for(let i=0; i<wagon.passenger.length; i++) {

      total=total+wagon.passenger[i].amount;
   }
   return total;
   
}
console.log('total:' +food(wagon));


