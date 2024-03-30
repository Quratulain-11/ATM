import inquirer from "inquirer";

let my_balance = 20000;
let my_pin = 25251;
console.log("welcome to code with qurat - ATM machine!");

let pin_ans = await inquirer.prompt([
    {
       name: "pin",
       type: "number",
       message: "Enter your pin number"
    }
]);

if (pin_ans.pin === my_pin) {
    console.log("your pin is correct, login successfully!");
    let operation_ans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select an operation",
            choices: ["withdraw", "check balance"] 
        }
        
    ]);

    if (operation_ans.operation === "withdraw") {
        let amount_ans = await inquirer.prompt([
          {
              name : "fastcash", 
              type : "list",
              message : "select amount to withdraw",
               choices : ["6000","15000","none of these"]
          } 
          
          ]);

        
if(amount_ans.fastcash === "6000"){
  my_balance -= 6000;
            console.log( "withdraw successful!");
            console.log("your remaining current balance is " + my_balance);
}
else if (amount_ans.fastcash === "15000"){
  my_balance -= 15000;
            console.log("withdraw successful!");
            console.log("your remaining current balance is "+ my_balance )
}
else if (amount_ans.fastcash === "none of these") {
  let required_amount = await inquirer.prompt([
     {
           name : "amount",
           type : "number",
           message : "enter amount to withdraw"
     }
 ])

       
 if (required_amount.amount > my_balance) {
          console.log("insufficient balance..! ");
          console.log("your current account balance is " + my_balance);
   }
 else  {
            my_balance -= required_amount.amount;
            console.log(`${required_amount.amount} withdraw successful!`);
            console.log("your remaining current balance is " + my_balance);
      }
 } 
}

else if  (operation_ans.operation === "check balance") {
          console.log("your account balance is " + my_balance);
    }    
  }
  
  else  {
         console.log("your pin is incorrect, try again!")
};