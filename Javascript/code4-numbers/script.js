var num = 15.123456789;

//3 basamaklı sayı
console.log(num.toPrecision(3));

//ondalık kısmı 3 basamak
console.log(num.toPrecision(5));

//en yakın sayıya yuvarla
console.log(Math.round(num));

//aşağı yuvarla
console.log(Math.floor(num));

//yukarı yuvarla
console.log(Math.ceil(num));

//1,2,10,56,20 en küçük ve en büyüğü bul
console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

//maaş hesabı
var brutSalary = 3700;
var brutWorkhour = 10.3;
var hours = 42;

var totalSalary = brutSalary + (brutWorkhour*hours);

console.log(totalSalary);
