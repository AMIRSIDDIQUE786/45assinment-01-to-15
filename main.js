//assignment 1
//download all in vs code
console.log("answer 01");
console.log("hello world!");
//assignment2
console.log("answer 02");
var persons_Name = "eric";
console.log("hello ".concat(persons_Name, " would you like to some more phython today"));
//assignment 3
console.log("answer 03");
var personName = "ghulam mustafa";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//assignment 4
console.log("answer 04");
var author = "Albert Einstein";
var quotes = ("A person who never made a  mistake never tried anythings new. ");
console.log("".concat(author, " once said ,\"").concat(quotes, "\""));
//assignment 5
console.log("answer 05");
var famous_person = "ALBERT EINSTEIN";
var quote = ("A person who never made a  mistake never tried anythings new. ");
var message = ("".concat(famous_person, "\" once said ,").concat(quote, "\""));
console.log(message);
//asssignment 6 stripping
console.log("answer 06");
var person_Name = "\n\t GHULAM MUSTUFA \t\n";
console.log(person_Name);
var stripped = (person_Name.trim());
console.log(stripped);
//assignment 7 and 8
console.log("answer 07,08");
var a = 5;
var b = 3;
var c = 4;
var d = 2;
var e = 11;
var f = 3;
var g = 16;
var addition = a + b; //addition
var multiplication = c * d; //multiplication
var subtraction = e - b; //subtraction
var division = g / d; /// division
console.log(addition);
console.log(multiplication);
console.log(subtraction);
console.log(division);
///OR SECOND METHOD
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//assignment 9 favourite number
console.log("answer 09");
var favouriteNumber = 8;
console.log("my favourite number is ".concat(favouriteNumber, " "));
//assignment 10
//let myname:string="ghulam mustufa"
//let date=28/05/24
console.log("answer 10");
console.log("ghulam mustufa is my son "); //simple type message
console.log(5 * 2); //simply multiplication
//assignment 11  array question
console.log("answer 11");
var friends = ["amir", "sadiq", "ameen"];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
//assignment 12  array type message
console.log("answer 12");
var friend = ["amir", "sadiq", "ameen"];
var messages = ("do you know some thing new about typescritp");
for (var i = 0; i < friend.length; i++) {
    console.log("MR ".concat(friends[i], ", ").concat(messages));
}
// assignment 13
console.log("answer 13");
var transportation = ["bike", "car", "hondacivic", "corolla"];
var messagee = ("I would like to own a ");
for (var i = 0; i < transportation.length; i++) {
    console.log("\"".concat(messagee, " ").concat(transportation[i]));
}
//assignment 14 invite friends for dinner
console.log("answer14");
var guest_list = ["sadiq", "amir", "ameen", "subhan"];
var messagees = ("I cordially invited you for dinner tommorow");
for (var i = 0; i < guest_list.length; i++) {
    console.log("MR ".concat(guest_list[i], ", ").concat(messagees));
}
//assignment 15 guest not present
console.log("answer15");
var guests_list = ["sadiq", "amir", "ameen", "subhan"];
var messegees = ("I cordially invited you for dinner tommorow \n THANK YOU");
for (var i = 0; i < guest_list.length; i++) {
    console.log("MR ".concat(guests_list[i], ", ").concat(messegees));
}
var not_present = "sadiq";
var new_guest = "walli";
guests_list[0] = new_guest;
for (var i = 0; i < guests_list.length; i++) {
    console.log("Mr ".concat(guests_list[i], ",").concat(messegees));
}
console.log("\"Due to some family issues mr ".concat(not_present, " would not come tommorow for dinner\""));
