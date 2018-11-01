### Verkefni 5 Javascript 
#### Róbert Atli Svavarsson

1. DOM

    a. Walking the DOM
    1. DOM children
    ```javascript
      document.body.childnodes[1];
    
      document.body.children[1];
    
      document.body.lastelementchild.lastelementchild;
    ```
    2. The sibling question
    
        a. Já, elementið ```elem.lastchild``` er alltaf síðasta elementið, það hefur engann ```nextsibling```.
        
        b. Nei, því ```elem.children[0]``` er fyrsta childið ásamt elementum en það geta verið önnur nodes sem eru ekki element, þannig ```previousSibling``` gæti verið text node.
    3. Select all diagonal squares
    ```javascript
      let table = document.body.firstElementChild;

       for(let row of table.rows)
       for(let col of row.cells)
       if (row.sectionRowIndex == col.cellIndex){
         col.style.backgroundColor = 'red';
       }
    ```
2. Events

    a. Browser events
    1. Hide self
    ```javascript
         let text = document.getElementById('text'); 

        hider.addEventListener("click", hideText, false);

        function hideText() {
          text.textContent = "";
        }
    ```
    2. Fyrsti handlerinn triggerast því hann er ekki removaður með ````removeEventListener```. Vegna þess að hann er að remova nyju functioni sem lytur eins ut og fyrra functionið. það þyrfti að hafa verið buið að geyma reference i functionið til að kalla á sama function.
    
