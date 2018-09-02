# FORR3JS05DU Verkefni 1

1. **Hvað er null og undefined?**
   - Undefined þýðir að breyta sem hefur verið búin til hefur ekki verið gefin gildi.
   - Null er gildi í breytu sem táknar ekkert gildi.
   
2. **Hvað gerir _'use strict'_ í JavaScript kóða?**

   Use strict segir browserinum að nota _Strict mode_ sem er minni og öruggari gerð af JavaScript.
   
3. **Hver er munurinn á _let_ og _var_?**

   _let_ og _var_ eru bæði skilgreindar sem _variables_ og eru nokkuð líkar á þann hátt.
     ```javascript
     let a = 'aaa';  // sýnilegt allstaðar *globally*
     var b = 'bbb'; // sýnilegt allstaðar *globally*
     ```
   En t.d. þegar _var_ er notað Globally þá er það _variable_ bætt við í _window_ objectið, hinsvegar er _let_ ekki bætt við í _window_ objectið þegar það er notað eins.
   ```javascript
   console.log(window.a); // undefined
   console.log(window.b); // 'bbb'
   ```
   Þau virka nákvæmlega eins þegar þau eru notuð svona í function.
   ```javascript
   function synidaemi() {
       let a = 'aaa'; // sýnilegt í functioninu
       var b = 'bbb'; // sýnilegt í functioninu
   }
   ```
   hinsvegar er _var_ sýnilegt fyrir utan for loopuna sem variableið er staðsett í, þegar _let_ er bara sýnilegt innan for loopunar.
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
   function daemi1(a, b) {
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
   function myFunction(a, b) {
    return a * b;
   }

   var x = myFunction(4, 3);
   ```
