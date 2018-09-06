# FORR3JS05DU Verkefni 2

1. **Búðu til object með upplýsingar um þig; nafn, heimasími og gsm. Prentaðu út með console.log() síðara símanúmerið.**
   ```javascript
   var upplysingar = {
      name:"robert",
      heimasimi:"5645567",
      gsm:"6913862",
   };
   console.log(upplysingar.gsm);
   ```
2. **Prentaðu út með console.log() Nonni.**
   ```javascript
   let family = {
   "parents":
      {
      "fathers": [{"name":"Jakob"},{"name":"Nonni"}],
      "mothers":[{"name":"Rakel"},{"name":"Sara"}]
      }
    };
   ```
   - Hérna er nonni prentaður út.
   ```javascript
   let family = {
      "parents":
         {
         "fathers": [{"name":"Jakob"},{"name":"Nonni"}],
         "mothers":[{"name":"Rakel"},{"name":"Sara"}]
         }
       };
   console.log(family.parents.fathers[1].name); // skrifar út "Nonni"
   ```
3. **Leystu lið 8 í Objects á Udacity.**
   ```javascript
   var breakfast = {
       name:"The Lumberjack",
       price:"9.95",
       ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
   };
   ```
4. **Leystu lið 9 í Objects á Udacity.**
   ```javascript
   var savingsAccount = {
       balance: 1000,
       interestRatePercent: 1,
       deposit: function addMoney(amount) {
           if (amount > 0) {
               savingsAccount.balance += amount;
           }
       },
       withdraw: function removeMoney(amount) {
           var verifyBalance = savingsAccount.balance - amount;
           if (amount > 0 && verifyBalance >= 0) {
               savingsAccount.balance -= amount;
           }
       },
       // your code goes here
       printAccountSummary: function printAccountSummary(){
           return "Welcome!\nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "+savingsAccount.interestRatePercent+"%.";
       }
   };

   console.log(savingsAccount.printAccountSummary());
   ```
5. **Leystu lið 12 í Objects á Udacity.**
   ```javascript
   var donuts = [
       { type: "Jelly", cost: 1.22 },
       { type: "Chocolate", cost: 2.45 },
       { type: "Cider", cost: 1.59 },
       { type: "Boston Cream", cost: 5.99 }
   ];

   // your code goes here
   donuts.forEach(function(donut){
       console.log(donut.type+ " donuts cost $"+donut.cost+" each");
   });
   ```
6. **Búðu til og notaðu smið (e. function constructor) til að búa til tvær mismunandi pizzur
(objects).**
   ```javascript
   function pizza(verd, staerd, alegg, tegund) {
      this.verd = verd;
      this.staerd = staerd;
      this.alegg = '(' + alegg + ')';
      this.tegund = tegund;
   }

   var pizza1 = new pizza(2260, "stor", "ostur, sosa", "margarita");
   var pizza2 = new pizza(2850, "mið", "skinka, sveppir, ostur, sosa", "Domino's Basic");

   console.log(pizza1.staerd, pizza1.tegund, pizza1.alegg+" kr. "+pizza1.verd);
   console.log(pizza2.staerd, pizza2.tegund, pizza2.alegg+" kr. "+pizza2.verd);
   ```
