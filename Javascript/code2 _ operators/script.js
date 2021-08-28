const weightMert = 75;
const weightSerra = 53;
const heightMert = 1.80;
const heightSerra = 1.65;

let bmiMert = weightMert / (heightMert*heightMert);
let bmiSerra = weightSerra / (heightSerra*heightSerra);

if (bmiSerra < 18.4) {
    console.log("BMI is : " + bmiSerra + "\nSerra Under Weight");
}
else if (bmiSerra > 18.5 && bmiSerra < 24.9) {
    console.log("BMI is : " + bmiSerra + "\nSerra Ideal Weight")
}
else if (bmiSerra > 25 && bmiSerra < 29.9) {
    console.log("BMI is : " + bmiSerra + "\nSerra Heavy Weight")
}

if (bmiMert < 18.4) {
    console.log("BMI is : " + bmiMert + "\nMert Under Weight");
}
else if (bmiMert > 18.5 && bmiMert < 24.9) {
    console.log("BMI is : " + bmiMert + "\nMert Ideal Weight")
}
else if (bmiMert > 25 && bmiMert < 29.9) {
    console.log("BMI is : " + bmiMert + "\nMert Heavy Weight")
}
