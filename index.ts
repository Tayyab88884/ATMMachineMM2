#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1234;
// Print Welcome Message
console.log("\n\t Welcome \n");
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter Your pin code:",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Pin is correct, Login Successfully!");
  // console.log (`Current Account Balance is ${myBalance}`)
  let operataionAns = await inquirer.prompt([
    {
      name: "operataion",
      type: "list",
      message: "Select an operataion:",
      choices: ["Withdraw Amount", "Check Balance"],
    },
  ]);
console.log(operataionAns)
  if (operataionAns.operataion === "Withdraw Amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount to withdraw:",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insuffient Balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw Successfully`);
      console.log(`Your remaining Balance is : ${myBalance}`);
    }
  } else if (operataionAns.operataion === "Check Balance") {
    console.log(`Your Account Balance is ${myBalance}`);
  }
} else {
  console.log("Pin is incorrect, Try Again!");
}