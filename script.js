//* 1. Write a constructor for the class Movie, which takes a String representing the title of the movie,
//*    a String representing the studio, and a String representing the rating as its arguments, and sets
//*    the respective class properties to these values.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var mymovie = new Movie("Love Today", "AGS Entertainment", "PG-13");
console.log(mymovie);

//! OUTPUT
//  title: 'Love Today', studio: 'AGS Entertainment', rating: 'PG-13'

//...................................................................................................

//* 2. The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie {
      constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if(this.rating===undefined){
            this.rating = "PG";
        }else{
            this.rating = rating;
        }
      }
    }
    var mymovie = new Movie("Love Today", "AGS Entertainment");
    console.log(mymovie);
//! OUTPUT
//title: 'Love Today', studio: 'AGS Entertainment', rating: 'PG'

//..........................................

//* 3. Write a method getPG, which takes an array of base type Movie as its argument, and
//*    returns a new array of only those movies in the input array with a rating of "PG".
//*    You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (this.rating === undefined) {
            this.rating = "PG";
        } else {
            this.rating = rating;
        }
        getPG(array); {
            var result = [];

            for (var i = 0; i < array.length; i++) {
                
                if (array[i].rating === "PG")

                    result.push(array[i]);
                }
            
            }
        return result;
    }
}
        
var moviel = new Movie("ABC", "MARVEL");

var movie2 = new Movie("gnh", "kk", "pg134"); var arr = [moviel, movie2, movie, movie4];

console.log(movie1.getPG(arr));
//...............................................................
//* 4. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var a =new Movie("Casino Royale","Eon productions","PG13");
console.log(a);
//! OUTPUT
//     "title": "Casino Royale",
//     "studio": "Eon productions",
//     "rating": "PG13"

//......................................................................

//* 5. Circle.

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.radiusCircle); //get radiusCircle
  
  obj1.radiusCircle = 2.2;
  console.log(obj1.radiusCircle); //set radiusCircle

//......................................................................

//* 6. write a "person" class to hold all the details?
 class Person {
    constructor(name,age,language,address,hobby,movies,programing_language_known){
        this.name = name;
        this.age = age;
        this.language = language;
        this.address = address;
        this.hobby = hobby;
        this.movies = movies;
    }
 }
 var per =new Person("Santhosh","22","Tamil and English","YYYY","Reading comics","KGF and Love Today","Javascript");
 console.log(per);

//!OUTPUT
//ddress: "YYYY"
// age: "22"
// hobby: "Reading comics"
// language: "Tamil and English"
// movies: "KGF and Love Today"
// name: "Santhosh"
//.............................................................
//* 7. write a class to calculate the uber price
class Uber{
    constructor(city1,city2,city3){
        this.city1 = city1;
        this.city2 = city2;
    this.city3 = city3;
    }
}
var price = new Uber(20,30,50);
console.log("Rs."+price.city1+" for 5 kilometers");
console.log("Rs."+price.city2+" for 10 kilometers");
console.log("Rs."+price.city3+" for 15 kilometers");
var total = new Uber(20+30+50);
console.log("Rs."+total.city1+" for all the cities");

//!OUTPUT
// 20 for 5 kilometers
// 142 30 for 10 kilometers
// 143 50 for 15 kilometers
// script.js:145 100 for all the cities
//................................................................


