// 1. Write a JavaScript program to list the properties of a JavaScript object.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.getOwnPropertyNames(student))

//2. Write a JavaScript program to delete the rollno property from the following object.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
delete student.rollno
console.log(student);

//3. Write a JavaScript program to get the length of a JavaScript object.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var keysStudent= Object.keys(student)
console.log(keysStudent.length);

//4. Write a JavaScript program to display the reading status (i.e. display book name, //author name and reading status) of the following books.
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

for (i=0;i<library.length;i++){
  console.log(Object.values(library[i]))
}

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places //using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the //height of the cylinder. Try To Attempt : Difficult Level Increased 
var r=34.5
var h=12.9354
const pi=3.14
var vol=(2*r*h*pi).toFixed(4)

console.log(vol)

//6. Write a JavaScript program to sort an array of JavaScript objects.: 

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

function compare(a,b){
  if(a.libraryID<b.libraryID){
    return -1;
  }
  if(a.libraryID>b.libraryID){
    return 1;
  }
  return 0;
}

library.sort(compare);
console.log(library);
