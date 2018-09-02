# FORR3JS05DU Verkefni 1

1. **Hvað er null og undefined?**
   1. Undefined þýðir að breyta sem hefur verið búin til hefur ekki verið gefin gildi.
   2. Null er gildi í breytu sem táknar ekkert gildi.
   
2. **Hvað gerir _'use strict'_ í JavaScript kóða?**
   1. Use strict segir browserinum að nota _Strict mode_ sem er minni og öruggari gerð af JavaScript.
   
3. **Hver er munurinn á _let_ og _var_?**
   1. _let_ og _var_ eru bæði skilgreindar sem _variables_ og eru nokkuð líkar á þann hátt.
     ```javascript
     let a = 'aaa';  // globally séð
     var b = 'bbb'; // globally séð  
     ```
   En t.d. þegar _var_ er notað Globally þá er það _variable_ bætt við í _window_ objectið, hinsvegar er _let_ ekki bætt við í _window_ objectið þegar það er notað eins.
   ```javascript
   console.log(window.in); // undefined
   console.log(window.ad); // 'bbb'
   ```
