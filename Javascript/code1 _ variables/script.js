// Customer Name :
var customerName = "Serra";

// Customer Surname :
var customerSurname = "Yıldız";

// Customer ID :
var customerID = "12345678";

// Customer Order Price :
var orderPrice = 66.3;

// Customer Gender :
var customerGender = "Woman";

// Custome Adress : (object)
var customerAdress = {
    city : "İstanbul",
    district : "Eyüp"
};

// Customer Hobbies :
var customerHobbies = ["Music", "Singing", "Coding"];

console.log(customerName, customerSurname);
console.log(customerID, customerGender);
console.log(orderPrice + " Dollars");

// Calculating Orders :
var order1 = Number('100.5');
var order2 = Number('300.4');
var totalOrder = order1 + order2;
console.log(totalOrder);

// Calculating Age :
var birthYear = 2000;
var presentYear = new Date().getFullYear();
var Age = presentYear - birthYear;
console.log(Age);