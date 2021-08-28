var startDate = new Date("04/20/2017");
startDate.setHours(0,0,0,0);
var totalDateMS = Date.now() - startDate.getTime();
var totalDateDay = Math.floor(totalDateMS/(1000*60*60*24));

console.log("Trafikte geçen gün : " + totalDateDay);

if (totalDateDay <= 365) {
    console.log("1. Bakım zamanı geldi.");
}
else if (totalDateDay > 365 && totalDateDay <= 730) {
    console.log("2. Bakım zamanı geldi.");
}
else if (totalDateDay > 730 && totalDateDay <= 1095) {
    console.log("3. Bakım zamanı geldi.");
}
else{
    console.log("100.000 KM Bakım zamanı geldi.");
}

/* ---------------------------------- */

var result = prompt("Who is there ?");


if (result == "cancel") {
    console.log("Cancelled.");
}
else if (result == "admin") {
    console.log("Welcome pal.");
    
    const password = prompt("Enter password : ");
    if (password == "master") {
        console.log("Logged in succesfully.");
    }
    else if (password == "cancel") {
        console.log("Canceled.");
    }
    else{
        console.log("Wrong password.");
    }

}
else{
    console.log("I don't know you.");
}