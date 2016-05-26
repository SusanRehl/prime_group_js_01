var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var calcBonus = function (employee) {
  //Declare variables
  var sti_per;
  var salary = parseInt(employee[2]);
  // Check Review Rating and begin multiplier constuction
  switch (employee[3]) {
    case 3:
      sti_per = 0.04;
    break;
    case 4:
      sti_per = 0.06;
    break;
    case 5:
      sti_per = 0.10;
    break;
    default:
      sti_per = 0;
    }
  // Check Employee tenure
  if (employee[1].length == 4) {
    sti_per += .05;
  }
  // Check Employee salary
  if (salary > 65000){
    sti_per -= .01;
  }
  // Restrict Bonus above %13
  if (sti_per > .13 ) {
    sti_per = .13;
  }
  // Round Bonus to two decimals and ensure they are type: number
  sti_per = Number(sti_per.toFixed(2));
  // Calculate return values
  var adj_annual = Math.round(salary + salary * sti_per);
  var totalBonus = Math.round(salary * sti_per);
  // Construct and return results array
  var outputArray = [employee[0], sti_per, adj_annual, totalBonus];
  return outputArray;
}
// Iterate through employee array
for (var i = 0; i < employees.length;i++) {
 console.log(calcBonus(employees[i]));
}
