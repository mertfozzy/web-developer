//araba dizileri
let cars = ["BMW","Mercedes","Opel","Mazda"];

//dizinin eleman sayısı
console.log(cars);

//dizinin ilk ve son elemanı
console.log(cars[0] + " and " + cars[cars.length-1]);

//diziye renault ekle
cars.push("Renault");
console.log(cars);

//dizinin başına toyota ekle
cars.unshift("Toyota");
console.log(cars);

//renault değerini sil
cars.splice(5,1)
console.log(cars);

//diziyi ters çevir
cars.reverse();
console.log(cars);

//dizi elemanlarını alfabetik sırala
cars.sort();
console.log(cars);

//[1,2,5,80] dizisini sırala
let numbers = [1,2,5,80,15];
function compare(a,b)
{
    if(a>b) return 1;
    if (a==b) return 0;
    if (a<b) return -1;
}
numbers.sort(compare);
console.log(numbers);

//opel dizinin kaçıncı elemanı?
let order = cars.indexOf("Opel");
console.log(order);

//var str = "Chevrolet, Dacia" iadesini dizi yap
var str = "Chevrolet, Dacia";

//diziyi başka diziyle birleştir
var cars2 = str.split(",");
cars3 = cars.concat(cars2);
console.log(cars3);


//verilen elemanları bir dizide sakla
/* 
    studentA : Yiğit Bilgi 2010
    studentB : Sena Turan 1999
    studentC : Ahmet Turan 1998

*/

var names = ["Yiğit", "Sena", "Ahmet"];
var surnames = ["Bilgi", "Turan", "Turan"]
var years = [2010, 1999,1998];

console.log("Student A : " + names[0] + " " + surnames[0] + " " + years[0]);