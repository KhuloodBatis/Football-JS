'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    order : function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

     //? to do orderDelivery 

   orderDelivery: function ({starterIndex =1 , mainIndex=0,time= '20:00' , address}){
    console.log(
        `Order recived! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
   },

   orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with${ing1},${ing2},${ing3}`);
   }
  };
   
  // restaurant.orderDelivery({
  //   time: '23:30',
  //   address: ' Via del Sole, 21',
  //   mainIndex: 2,
  //   starterIndex: 2,
  // });

  // restaurant.orderDelivery({
  //   address: ' Via del Sole, 21',
  //   starterIndex: 1,
  // });



//   const { name , openingHours , categories}  = restaurant;
//   console.log(name,openingHours,categories);

//   const{name: restaurantName , openingHours: hours,
// categories: tags } = restaurant;

// console.log(restaurantName,hours,tags);
// //! default value
// const { menu = [], starterMenu: starters = []}= restaurant;
// console.log(menu,starters);

//! Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a:23 , b:7 , c:14 };
// ( { a, b } = obj);

// console.log(a , b);

//! nestad Object
// ? 1)
// const {fri} = openingHours;
// console.log(fri);
//?2)
// const {fri:{open,close}} = openingHours;
// console.log(open,close);
//?3)
// const {fri:{open:o , close:c}} = openingHours;
// console.log(o,c);

//   const arr = [2,3,4];
//   const a = arr[0];
//   const b = arr[1];
//   const c = arr[2];

//   const [x,y,z] = arr ;
//   console.log(x,y,z);
//   console.log(arr);
 
//   const [first,, second]= restaurant.categories;
//   console.log(first, second);

// let [main,, scondary]= restaurant.categories;
//   console.log(main, scondary);

//   const temp = main;
//   main = scondary;
//   secodary = temp;
//   console.log(main,scondary);

// [main,scondary] = [scondary,main];
// console.log(main,scondary);


// const [starter,main] = restaurant.order(2,0)
// console.log(starter,main);

// const nested = [2,4 ,[5,6]]
// const [i,,j] = nested 
// console.log(i,j);

// const [i,,[j,k]]= nested
// console.log(i,j,k);

// const [p=1, q=1 , r=1] = [8,9];
// const [p=1, q=1 , r=1] = [8];
// console.log(p,q,r)

//!108
// restaurant.nameGuests = 0;
// const guests = restaurant.nameGuests || 10 ;
// console.log(guests);

// //? Nullish: null and undefined (NOT 0 or '')
// // const guestCorrect = restaurant.nameGuests ?? 10;
// // console.log(guestCorrect);
// //!105
// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0] , arr[1] , arr[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu  = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// //jin 2 arrays

// const menu = [...restaurant.starterMenu , ...restaurant.mainMenu]

// console.log(...menu);
// //!! Itarables : arrays, string, maps,sets , Not objects

// const str = 'jonas';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// // console.log(`${...str}`);

// const ing = [
//   prompt('Let\'s mke pasta!?'),
//   prompt('Ingredient 2?'),
// prompt('Ing3')]
// console.log(ing);

// restaurant.orderPasta(ing[0],ing[1],ing[2])
// restaurant.orderPasta(...ing);

//!Use Any data type , return any data type, Short_circuiting 

console.log(3&& 'Jonas');
console.log('' && 'Jonas');
console.log(true&&0);
console.log(undefined&&null);