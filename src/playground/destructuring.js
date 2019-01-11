//
// Object destructuring
//

const person={
    // name:'Andrew',
    age:34,
    location:{
        city:'Sri Lanka',
        temp:78
    }
};

const {name:myName='Anonimous',age} = person;
// const name=person.name;
// const age=person.age;

console.log(`${myName} is ${age}`);

const{temp:temperature,city:town}=person.location;

if(temperature && town){
    console.log(`It's ${temperature} farenheight in ${town}.`);
}

const book={
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        // name:'Penguin'
    }
};
const {name:publisher='Self-published'}=book.publisher;
console.log(`Published by ${publisher}.`)

//
//Array destructuring
//

const address=['1299 S Juniper Street', 'Philadolpia','Penselvania','1947'];

const [street, city, state='NYC', zip]= address;

console.log(`You are in ${state}.`);
  
const item=['Coffee (hot)', '$2.00','$2.50',"$2.75"];
const[coffee,,cost]=item;

console.log(`A medium ${coffee} costs ${cost}.`);