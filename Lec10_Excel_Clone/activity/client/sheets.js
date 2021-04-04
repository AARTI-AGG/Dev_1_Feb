let addSheetBtn = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");
let defaultSheet = document.querySelector(".sheet"); //sheet1
let sheetId = 1;

addSheetBtn.addEventListener("click", addSheetHandler);
defaultSheet.addEventListener("click" , switchSheetHandler);

//jab click krenge toh vo sheet active hojayegi or baki ki unactive-- class
function switchSheetHandler(e){
    let clickedSheet = e.target;
    if(!clickedSheet.classList.contains("active-sheet")){
        let currentActiveSheet = document.querySelector(".active-sheet");
        currentActiveSheet.classList.remove("active-sheet");
        clickedSheet.classList.add("active-sheet");
          // set DB
          let sid = clickedSheet.getAttribute("sid");
          db = sheetsDB[sid];
          // set UI
          setUI();
          addressBox.value = "";
          formulaBox.value = "";
      }
}

//add button se sheet add hogi
function addSheetHandler() {
  initDB(); //adds a new db to sheetsDB
  let sheet = document.createElement("div");  // div dega
  sheet.classList.add("sheet"); // class sheet 
  sheet.setAttribute("sid" , sheetId); // id sid 
  sheetId++;
  sheet.textContent = `Sheet ${sheetId}`; // sid set
  //<div class="sheet" sid="1">Sheet 2</div>
  sheetsList.append(sheet); // DOM effect
  sheet.addEventListener("click" , switchSheetHandler); // jo bhi add hoti jaye click listener lgta jaye
  console.log(sheetsDB);
}