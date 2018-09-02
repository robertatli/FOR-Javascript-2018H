# FORR3JS05DU Verkefni 1

1. **Hvað er null og undefined?**
   1. Undefined þýðir að breyta sem hefur verið búin til hefur ekki verið gefin gildi.
   2. Null er gildi í breytu sem táknar ekkert gildi.
   
2. **Hvað gerir _'use strict'_ í JavaScript kóða?**

   Use strict segir browserinum að nota _Strict mode_ sem er minni og öruggari gerð af JavaScript.
   
3. **Hver er munurinn á _let_ og _var_?**

   _let_ og _var_ eru bæði skilgreindar sem _variables_ og eru nokkuð líkar á þann hátt.
     ```javascript
     let a = 'aaa';  // globally séð
     var b = 'bbb'; // globally séð  
     ```
   En t.d. þegar _var_ er notað Globally þá er það _variable_ bætt við í _window_ objectið, hinsvegar er _let_ ekki bætt við í _window_ objectið þegar það er notað eins.
   ```javascript
   console.log(window.a); // undefined
   console.log(window.b); // 'bbb'
   ```
   Þau virka nákvæmlega eins þegar þau eru notuð svona í function.
   ```javascript
   function synidaemi() {
       let a = 'aaa'; //function block scoped
       var b = 'bbb'; //function block scoped
   }
   ```
   hinsvegar 
   ```javascript
   function synidaemi() {
    //daemi is *not* visible out here

    for( let daemi = 0; daemi < 5; daemi++ ) {
        //daemi is only visible in here (and in the for() parentheses)
        //and there is a separate daemi variable for each iteration of the loop
    }

    //daemi is *not* visible out here
   }

   function synidaemi2() {
       //daemi2 *is* visible out here

       for( var daemi2 = 0; daemi2 < 5; daemi2++ ) {
           //daemi2 is visible to the whole function
       }

       //daemi2 `*er*` sýnilegt hérna
   }
   ```
