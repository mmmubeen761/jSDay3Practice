// ....................................................Day 3


//////////////////////////////////////////////////////////////   level 1 ///////////////////////////////

// part 1)
var firstName = "Malik";
var lastName = "Mubeen";
var city = "Karachi";
var age = 18;
var isMarrid = false;
var year = 2020;

console.log(typeof firstName )
console.log(typeof lastName )
console.log(typeof city )
console.log(typeof age )
console.log(typeof isMarrid )
console.log(typeof year )


// part 2)
console.log(typeof '10' == 10)


// part 3)
var parseIn = parseInt('9.8');
console.log(parseIn == 10)

// part 4)
// i)
console.log(+('10')==10)
console.log(20>10)
console.log(30>20 || 10<6)

// ii)
console.log(+('10')!=10)
console.log(20<10)
console.log(30>20 && 10<6)


// part 5)
console.log(4>3) //true
console.log(4>=3) //true
console.log(4<3) //false
console.log(4<=3) //false
console.log(4==4) //true
console.log(4===4) //true
console.log(4!=4) //false
console.log(4=='4') //true
console.log(4==='4') //false
var a = 'python'
var b = 'jardon'
console.log(a.length!=b.length)


// part 6)
console.log( 4 > 3 && 10 < 12) //true
console.log( 4 > 3 && 10 > 12) //false
console.log( 4 > 3 || 10 < 12) //true
console.log( 4 > 3 || 10 > 12) //true
console.log(!(4>3)) //false
console.log(!(4<3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
// There is no 'on' in both dragon and python //false


// part 7)
// i)
console.log(new Date().getFullYear())
// ii)
console.log(new Date().getMonth())
// iii)
console.log(new Date().getDate())
// iv)
console.log(new Date().getDay())
// v)
console.log(new Date().getHours())
// vi)
console.log(new Date().getMinutes())
// vii)
console.log(Date.now())



//////////////////////////////////////////////////////////////   level 2 ///////////////////////////////

// part 1)
var a = prompt("Enter Base:")
var b = prompt("Enter Height:")
console.log(` The area of the triangle is ${a*b/2}`)


// part 2)
var c = +prompt("Enter side a:") 
var d = +prompt("Enter side b:") 
var e = +prompt("Enter side c:") 
console.log(`The perimeter of the triangle is ${c+d+e}`)


// part 3)
var lengt = prompt("Enter lenght:")
var widt = prompt("Enter width:")
console.log(`Area of rectangle ${lengt*widt}`)
console.log(`Parameter of rectangle ${2*(lengt+widt)}`)


// part 4)
var rad = prompt("Enter Radius :")
console.log(`Area is: ${3.14*rad*rad}`)
console.log(`Circumference is: ${2*3.14*rad}`)


// part 5)
 var a = prompt("Enter Hours you work in a week");
 var b = prompt("Enter rate per Hours");
console.log(`Your weekly earning is ${a*b}`)


// part 6)
let name ="malik";
name.lenght < 7
? 
alert("name is long")
:
alert("name is short")


// part 7)
let firstName = "Malik";
let lastName = "Mubeen";
console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)


// part 8)
let myAge = 18;
let yourAge = 16;
console.log(`I am ${myAge} Years old than you Maryam Noor`)


// part 9)
var birthYear = +prompt("Enter your Birth");
var age = 2020 - birthYear;
age >18
?
alert(`You are ${age}. You are old enough to drive`)
:
alert(`You are ${age}. You will be allowed after`)


// part 9)
var live = +prompt("Enter number of yours you lives");
console.log(`You live ${Date.now()*live } seconds`)

// part 9)
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var day = time.getDay;
var hour = time.getHours();
var min = time.getMinutes();
// i)
console.log(`${year}-${'0'+month}-${'0'+date} ${'0'+hour}:${min}`)
// ii)

console.log(`${date}-${'0'+month}-${'0'+year} ${'0'+hour}:${min}`)

// iii)
console.log(`${date}/${'0'+month}/${'0'+year} ${'0'+hour}:${min}`)




//////////////////////////////////////////////////////////////   level 3 ///////////////////////////////


// part 1)
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
console.log(`${year}-${'0'+month}-${'0'+date} ${'0'+hour}:${min}`)
