# FORR3JS05DU Verkefni 1

1. **Hvað er null og undefined?**
   1. Undefined þýðir að breyta sem hefur verið búin til hefur ekki verið gefin gildi.
   2. Null er gildi í breytu sem táknar ekkert gildi.
   
2. **Hvað gerir _'use strict'_ í JavaScript kóða?**
   1. Use strict segir browserinum að nota _Strict mode_ sem er minni og öruggari gerð af JavaScript.
   
3. **Hver er munurinn á _let_ og _var_?**
   1. _let_ og _var_ eru bæði skilgreindar sem _variables_ og t.d. þegar _var_ er notað Globally þá er það _variable_ bætt við í _window_ objectið, hinsvegar er _let_ ekki bætt við í _window_ objectið þegar það er notað eins.
     ```
     let me = 'go';  // globally scoped
     var i = 'able'; // globally scoped  
     ```
