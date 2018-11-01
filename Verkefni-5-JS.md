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
      a. Já, elementið ```javascript elem.lastchild``` er alltaf síðasta elementið, það hefur engann ```javascript nextsibling```
    3. Select all diagonal squares
    ````javascript
      let table = document.body.firstElementChild;

       for(let row of table.rows)
       for(let col of row.cells)
       if (row.sectionRowIndex == col.cellIndex){
         col.style.backgroundColor = 'red';
       }
    ```
