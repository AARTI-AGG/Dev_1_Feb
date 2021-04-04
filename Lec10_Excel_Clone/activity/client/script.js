// click event listener on cells 
//addressing on cell
let allCells = document.querySelectorAll(".cell");
let addressBox = document.querySelector("#address");
let formulaBox= document.querySelector("#formula");
let lsc; 
// last selected cell

//attaching listeners on 26000 cells
for(let i=0 ; i<allCells.length ; i++){
    // [ <div> </div> , <div> </div> , <div> </div> , <div> </div> ]
    allCells[i].addEventListener("click" , onCellClickHandler )  ;
    allCells[i].addEventListener("blur", onCellBlurHandler ) ;
}

formulaBox.addEventListener("blur" , onFormulaBlurHandler);

//onclick handler
//click karke ptachlega kya address hai and kya formula hai
function onCellClickHandler(e){        
    let clickedCell = e.target;
    let cellObject = getCellObject(clickedCell);
    // input type element so assigning values to them
    addressBox.value = cellObject.name;
    formulaBox.value = cellObject.formula;
}

//onblur handler
//cell ka focus hatane ke baad value db meh jayega
function onCellBlurHandler(e){
    let blurredCell = e.target;
    lsc = blurredCell;
    let value = blurredCell.textContent;
    let cellObject = getCellObject(lsc);

    //agr toh formula hai or value change krdi tog formula delete kardo
   if(cellObject.formula && cellObject.value!=value){
       deleteFormula(cellObject);
   }
    //saving to db
    cellObject.value = value;
    //  console.log(db);
    //update childrens
    updateChildrens(cellObject);
}

//jab formula likh do toh kaise calculate kare
 function onFormulaBlurHandler(){

    let formula = formulaBox.value;
    // falsy values ko neglect krdega => undefined , false , "" , 0 , null
    if(formula){
        //last cell jo blur huha basically jispr output dalna hai
       let cellObject= getCellObject(lsc);
        
       //agr formula phle se hi hai or ushe change krna hai toh phle vale ko delete kardo
       if(cellObject.formula)
       {
           deleteFormula(cellObject);
       }
       // ( A1 + A2 )
        let value = solve(formula,cellObject);
        // set UI
        lsc.textContent = value;
        // set DB
        cellObject.formula = formula;
        cellObject.value = value+"";
       // tell childrens to update
        updateChildrens(cellObject);
    }
}
