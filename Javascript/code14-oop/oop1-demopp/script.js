let Employee = function (name, salary, month) {
    this.name = name;
    this.salary = salary;
    this.month = month;
}

Employee.prototype.calculateTotalSalary = function () {
    var totalSalary = this.salary*this.month;
    return totalSalary;
}

Employee.prototype.calculateTaxes = function () {
    var x = this.calculateTotalSalary(this.totalSalary);

    if (x <= 20000) {
        var tax = x * (20/100);
    }
    else if (x > 20000 && x <= 30000) {
        var tax = x * (25/100);
    }
    else if (x > 30000) {
        var tax =  x * (27/100);
    }

    var exactIncome = x - tax ;
    return exactIncome;

}

var Mert = new Employee ("Mert", 5000, 4);
var Serra = new Employee ("Serra", 6000, 5);

console.log( "Mert's total Salary : " +  Mert.calculateTotalSalary(this.totalSalary));
console.log( "Mert's exact Income : " + Mert.calculateTaxes(this.exactIncome));
console.log("-------------------------------");
console.log( "Serra's total Salary : " + Serra.calculateTotalSalary(this.totalSalary));
console.log( "Serra's total Income : " + Serra.calculateTaxes(this.exactIncome));

