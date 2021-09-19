//Person Constructor
let Person = function (name) {
    this.name = name;
}

Person.prototype.Introduce = function () {
    console.log("Hello my name is  : " + this.name + ".");
}

//Student Constructor
let Student = function (name, number) {
    Person.call(this,name);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; 
Student.prototype.Study = function () {
    console.log("My number is : " + this.number);
}

//Teacher Constructor
let Teacher = function (name, branch) {
    Person.call(this,name);   
    this.branch = branch;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.Teach = function () {
    console.log("My branch is : " + this.branch);
}

//Headmaster Constructor
let Headmaster = function (name, branch) {
    Teacher.call(this,name,branch);   
}
Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.shareTask = function () {
    console.log("I am arranging the lecture hours.");
}


//Calling Functions :

//Calling person
let p1 = new Person("Mert Altuntaş");
p1.Introduce();
console.log("============");

//Calling teacher
let t1 = new Teacher("Sadık Turan", "Computer Science");
t1.Introduce();
t1.Teach();
console.log("============");

//Calling student
let s1 = new Student("Mercan Gamze Altuntaş", 1804010005);
s1.Introduce();
s1.Study();
console.log("============");

//Calling headmaster
let h1 = new Headmaster("Selahattin Kuru", "Engineering");
h1.Introduce();
h1.Teach();
h1.shareTask();
console.log("============");