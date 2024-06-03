//assignment 1
//download all in vs code
console.log("answer 01") 

console.log("hello world!")

//assignment2
console.log("answer 02")

let persons_Name:string="eric";
console.log(`hello ${persons_Name} would you like to some more phython today`)

//assignment 3
console.log("answer 03")

let personName:string="ghulam mustafa"
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//assignment 4
console.log("answer 04")

let author:string="Albert Einstein";
let quotes:string=("A person who never made a  mistake never tried anythings new. ");
console.log(`${author} once said ,"${quotes}"`);

//assignment 5
console.log("answer 05")

let famous_person:string="ALBERT EINSTEIN"
let quote:string=("A person who never made a  mistake never tried anythings new. ");
let message:string=(`${famous_person}" once said ,${quote}"`);
console.log(message);

//asssignment 6 stripping
console.log("answer 06")

let person_Name:string=`\n\t GHULAM MUSTUFA \t\n`
console.log(person_Name)
let stripped:string=(person_Name.trim());
console.log(stripped);

//assignment 7 and 8
console.log("answer 07,08")

let a:number=5
let b:number=3
let c:number=4
let d:number=2
let e:number=11
let f:number=3
let g:number=16
let addition=a+b  //addition
let multiplication=c*d //multiplication
let subtraction=e-b  //subtraction
let division=g/d    /// division
console.log(addition)
console.log(multiplication)
console.log(subtraction)
console.log(division)

///OR SECOND METHOD
console.log(5+3)
console.log(11-3)
console.log(4*2)
console.log(16/2)

//assignment 9 favourite number
console.log("answer 09")

let favouriteNumber:number=8
console.log(`my favourite number is ${favouriteNumber} `);

//assignment 10
//let myname:string="ghulam mustufa"
//let date=28/05/24
console.log("answer 10")

console.log("ghulam mustufa is my son ")//simple type message
console.log(5*2) //simply multiplication


//assignment 11  array question
console.log("answer 11")

let friends:string []=["amir","sadiq","ameen"];
for(let i=0; i<friends.length;i++){
console.log(friends[i]);
}

//assignment 12  array type message
console.log("answer 12")

let friend:string []=["amir","sadiq","ameen"];
let messages:string=("do you know some thing new about typescritp");
for(let i=0; i<friend.length;i++){
console.log(`MR ${friends[i]}, ${messages}`);
}

// assignment 13
console.log("answer 13")

let transportation:string[]=["bike","car","hondacivic","corolla"]
let messagee:string=("I would like to own a ")
for(let i=0; i<transportation.length;i++){
    
    console.log(`"${messagee} ${transportation [i]}`)
}

//assignment 14 invite friends for dinner
console.log("answer14")
let guest_list:string[]=["sadiq","amir","ameen","subhan"]
let messagees:string=("I cordially invited you for dinner tommorow")
for(let i=0;i<guest_list.length;i++){
console.log(`MR ${guest_list[i]}, ${messagees}`)
}

//assignment 15 guest not present

console.log("answer15")
let guests_list:string[]=["sadiq","amir","ameen","subhan"]
let messegees:string=("I cordially invited you for dinner tommorow \n THANK YOU")
for(let i=0;i<guest_list.length;i++){
console.log(`MR ${guests_list[i]}, ${messegees}`)
}
let not_present ="sadiq"
let new_guest ="walli"
guests_list[0]=new_guest
for (let i=0; i<guests_list.length;i++){
    console.log(`Mr ${guests_list[i]},${messegees}`)
}
console.log(`"Due to some family issues mr ${not_present} would not come tommorow for dinner"`);