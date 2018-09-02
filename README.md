# FORR3JS05DU Verkefni 1

1. **Hvað er null og undefined?**
   - Undefined þýðir að breyta sem hefur verið búin til hefur ekki verið gefin gildi.
   - Null er gildi í breytu sem táknar ekkert gildi.
   
   
   
2. **Hvað gerir _'use strict'_ í JavaScript kóða?**

   - Use strict segir browserinum að nota _Strict mode_ sem er minni og öruggari gerð af JavaScript.
   
   
   
3. **Hver er munurinn á _let_ og _var_?**

   - _let_ og _var_ eru bæði skilgreindar sem _variables_ og eru nokkuð líkar á þann hátt.
   ```javascript
   let a = 'aaa';  // sýnilegt allstaðar *globally*
   var b = 'bbb'; // sýnilegt allstaðar *globally*
   ```
   - En t.d. þegar _var_ er notað Globally þá er það _variable_ bætt við í _window_ objectið, hinsvegar er _let_ ekki bætt við í _window_ objectið þegar það er notað eins.
   ```javascript
   console.log(window.a); // undefined
   console.log(window.b); // 'bbb'
   ```
   - Þau virka nákvæmlega eins þegar þau eru notuð svona í function.
   ```javascript
   function synidaemi() {
       let a = 'aaa'; // sýnilegt í functioninu
       var b = 'bbb'; // sýnilegt í functioninu
   }
   ```
   - hinsvegar er _var_ sýnilegt fyrir utan for loopuna sem variableið er staðsett í, þegar _let_ er bara sýnilegt innan for loopunar.
   ```javascript
   function synidaemi() {
    // daemi er ekki sýnilegt hérna

    for( let daemi = 0; daemi < 10; daemi++ ) {
        // daemi er bara sýnilegt hérna (og í for() hausinum)
        // og það er buin til ný daemi variable i hvert skipti sem for loopan spilast
    }

    // daemi er ekki sýnilegt hérna
   }

   function synidaemi2() {
       // daemi2 er sýnilegt hérna

       for( var daemi2 = 0; daemi2 < 10; daemi2++ ) {
           // daemi2 is visible to the whole function
       }

       // daemi2 er sýnilegt hérna
   }
   ```
   
   
4. **Skilgreindu fall á þrjá mismunandi vegu með kóðasýnidæmi.**
   - Fyrst er einfalda leiðin til að skilgreyna function og sem er einnig oftast notað.
   ```javascript
   function daemi(a, b) {
    return a * b;
   }
   ```
   - Það er líka hægt að láta functionin setja sig sjálf í gang
   ```javascript
   (function () {
    var x = "Hæ!!";      // ég kalla á mig sjálfa!
   })();
   ```
   - functions geta verið notaðar sem gildi (value)
   ```javascript
   function daemi(a, b) {
    return a * b;
   }

   var x = daemi(4, 3);
   ```
   
   
5. **Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?**
   ```javascript
   (function() { alert('Hello World'); })(); // þessi function kallar á sjálfa sig eins og var sýnt í dæmi 4.2 hér fyrir ofan.
   ```
   
6. **Í hvaða röð er kóðinn keyrður í raun eftir að JS þýðandinn (e. interpreter) er búinn að fá
hann til sín? Raðaðu kóðanum rétt fyrir JS þýðandanum. Afhverju er útkoman 8? Útskýrðu.**
   - function eru fyrsta sem þýðandinn les og sýðan returnar hann útkomunni, og þar sem það er buið til bar() functionið tvisvar þá tekur seinna bar()-ið yfir fyrra og því returnar foo() 8.
   ```javascript
   function foo(){
      function bar() {
         return 3;
      }
      return bar();
      function bar() {
         return 8;
      }
   }
   alert(foo()); 
   ```
   - Svona ætti kóðinn frekar að lýta út.
   ```javascript
   function foo(){
      function bar() {
         return 3;
      }
      function bar() {
         return 8;
      }
      return bar();
   }
   alert(foo());
   ```
   - En hann væri ennþá hreinni svona:
   ```javascript
   function foo(){
      function bar() {
         return 8;
      }
      return bar();
   }
   alert(foo());
   ```
   
   
7. **Hver er munurinn á _for_, _for-in_ og _for-of_ lykkjum?**
   - _for_ er notað fyrir venjulegar for loopur sem vinnur í gegnum kóðann sinn jafn oft og þú segir henni að gera það.
   ```javascript
   for (i = 0; i < 5; i++) {
    text += "númer " + i + "<br>";
   } // skrifar út 'númer 1' - 'númer 5' með break milli lína.
   ```
   - _for-in_ er notað til að loopa í gegnum eiginleika objecta og getur virkað með arrays
   ```javascript
   var person = {fname:"Robert", lname:"Atli", age:19}; 

   var text = "";
   var x;
   for (x in person) {
       text += person[x];
   } // skrifar ut 'Robert Atli 19'
   ```
   - _for-of_ virkar ekki með objects og virkar betur með arrays heldur en _for-in_
   ```javascript
   const array = ['a', 'b', 'c', 'd'];
   for (const stafur of array) {
      console.log(stafur)
   }
   // skrifar ut 'a, b, c, d'
   ```
8. **Leystu lið 20 i arrays a Udacity**
   ```javascript
   var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
   ];

   // Write your code here
   test.forEach(function(num, index, array){
     if(num % 3 === 0){
       array[index] = num += 100; 
     }

   });

   console.log(test);
   ```
9. **Hvað gerir .map() fylkjaaðferðin?**
   - .map() skilar út nýjum array með sömu values og þú getur breytt þeim í leiðinni.
   ```javascript
   var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

   var totals = bills.map(function(bills){ //tekur bills arrayinn inn i .map() til að bua til nyjan array með sömu values
      bills = bills * 1.15; // bætir við 15% tip ofan a hvert value i bills
      return Number(bills.toFixed(2)); // returnar með tvemur aukastöfum
   });
   console.log(totals);
   ```
10. **Leystu lið 25 í arrays í lesson 6 á Udacity**
   ```javascript
   var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
   ];

   // your code goes here
   for (var row = 0; row < numbers.length; row++) {

     for(var column = 0; column < numbers[row].length; column++) {
       if (numbers[row][column] % 2 === 0) {
         numbers[row][column] = "even";
       }else {
         numbers[row][column] = "odd"; 
       }
     }
   }

   console.log(numbers); 
   ```
