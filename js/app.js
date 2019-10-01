'use strict';

var seattle = {
  location: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  //generates a random number of customers
  //generates a random number of customers 
  randomNumOfCustomers: function() {
    var randomCust = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return randomCust;
  },
  //takes that random number and multiplies it by average hourly cookie amount;
  simulatedCookieAmount: function(){
  //creates an empty array to store the multiplication results (I didn't figure this array step out on my own, I looked at Trevor's code)
    var hourlyCookies = [];
    //loops through the storeHours array (really just to use it's length which is 15) and runs the calculation to get the total hourly amount of cookies--pushes that amount into the empty array created above
    for (var i = 0; i <= this.storeHours.length; i++) {
      hourlyCookies.push(Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust)); 
    }
    return hourlyCookies;
  },
  total: function(){
  //I want to add the items from the hourlyCookies array created above together, but I'm still working on how to do this. When I try to access an item from that array, I get a "cannot read property 'O' of undefined" error
    var totalDailyCookies = this.hourlyCookies[0];
    return totalDailyCookies;
  },
  //finally I want to create a variable that has a string as it's value; the string needs to go through a loop where each time it accesses a value from the storeHours array AND each time it accesses a value from the hourlyCookies array create by the simulatedCookieAmount function with the output being something like the following:'${this.storeHours[i]}: ${this.hourlyCookies[i]} cookies'
};

console.log(seattle.randomNumOfCustomers());
console.log(seattle.simulatedCookieAmount());
console.log(seattle.total());


// var hourlyCookiesSold = [seattle.simulatedCookieAmount(), tokyo.simulatedCookieAmount(), dubai.simulatedCookieAmount(), paris.simulatedCookieAmount(), lima.simulatedCookieAmount()];


//put the code below into a rendering function
//gets section element that has id of cookiesales
var cookieSalesByHour = document.getElementById('cookiesales');
//creates an h1 element, gives it the id of storename, and adds text to it
var storename = document.createElement('h1');
storename.setAttribute('id', 'storename');
storename.textContent = 'Seattle';
//makes the h1 element a child of the section element
cookieSalesByHour.appendChild(storename);
//creates unordered list element, gives it the class of cookiesperhour, and makes it a child of the h1 element above
var cookiesSoldPerHour = document.createElement('ul');
cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
storename.appendChild(cookiesSoldPerHour);
//creates a list item element and makes it a child of the ul element above
var cookieListItem = document.createElement('li');
cookieListItem.textContent = 'placeholder';
cookiesSoldPerHour.appendChild(cookieListItem);


/*
What needs to be in the list?
- 15 list items
- one option would be to store the times in an array
- or one by one
- '6am: ${PLACEHOLDER} cookies'
- how do you repeat the creation of an element? 

1. Seattle
    * 6am: 16 cookies
    * 7am: 20 cookies
    * 8am: 35 cookies
    * 9am: 48 cookies
    * 10am: 56 cookies
    * 11am: 77 cookies
    * 12pm: 93 cookies
    * 1pm: 144 cookies
    * 2pm: 119 cookies
    * 3pm: 84 cookies
    * 4pm: 61 cookies
    * 5pm: 23 cookies
    * 6pm: 42 cookies
    * 7pm: 57 cookies
    * Total: 875 cookies
*/
