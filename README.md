Welcome to Group Project 01 from PrimePayroll.

Nick, Susan, Anna, Matthew all contributed to and had a blast with this challenge.

Group based STI activity
Write a single JavaScript file to automatically calculate employee STI (‘short term incentive’ or ‘bonus’) for a company.

Sample arrays are provided that serve as examples of how their data is currently being stored (employee name, number, annual salary, review rating). There is also one main array named employees that stores each of these.

Write a function that consumes one employee array (i.e. atticus, jem, etc. from the group_01.js) and returns another array that contains employees name, percentage of STI the employee is to receive, adjusted annual compensation (base annual + STI), employee total bonus rounded to the nearest dollar.

To calculate an individuals STI:
Those who have a rating of a 2 or below should not receive a bonus.
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
If they have 4 employee numbers, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% total.
You may abstract out the STI calculation into a second function if you like, but this is not mandatory.

Finally, iterate over the employees array and input each index of the array to your function, and console.log the results of the function for each iteration.

