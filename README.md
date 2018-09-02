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
