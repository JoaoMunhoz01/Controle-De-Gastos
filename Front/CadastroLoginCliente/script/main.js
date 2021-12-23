// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var mod = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mod) {
        mod.style.display = "none";
    }
}
var mod2 = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mod2) {
        mod2.style.display = "none";
    }
} 
var mod3 = document.getElementById('id04');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mod3) {
        mod3.style.display = "none";
    }
}

function addRow(tableID, val, val1, val2, val3) {

    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
  
    // Append a text node to the cell
    let newText = document.createTextNode(val);

    // Insert a cell in the row at index 1
    let newCell1 = newRow.insertCell(1);
  
    // Append a text node to the cell
    let newText1 = document.createTextNode(val1);

    // Insert a cell in the row at index 1
    let newCell2 = newRow.insertCell(2);
  
    // Append a text node to the cell
    let newText2 = document.createTextNode(val2);

    // Insert a cell in the row at index 1
    let newCell3 = newRow.insertCell(3);
  
    // Append a text node to the cell
    let newText3 = document.createTextNode(val3);

    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
}

function Encrypt(value) {
  var result="";
  for(i=0;i<value.length;i++){
    if(i<value.length-1){
        result+=value.charCodeAt(i)+10;
        result+="-";
    }
    else{
        result+=value.charCodeAt(i)+10;
    }
  }
  return result;
}
function bgNone(val) {
    document.getElementById('buttonBox').style.display = 'none';
    if (val) {
        document.getElementById('id01').style.display = 'block'
    } else {
        document.getElementById('id02').style.display = 'block'
    }
}
function bgBlock(val) {
    document.getElementById('buttonBox').style.display = 'flex';
    if (val) {
        document.getElementById('id01').style.display = 'none'
    } else {
        document.getElementById('id02').style.display = 'none'
    }
}
