const selectionItem = document.querySelectorAll(".selection-item");
const subTotalSpan = document.getElementById("sub");

id = 0;


selectionItem.forEach(item => {
  idString = id.toString();

  item.id = idString;
  item.onclick = function onclick(event) {selected(this.id)}

  id += 1;
})



function selected(selectedId) {
  const selectedOption = document.getElementById(selectedId);
  selectedOption.classList.toggle("selected-style");

  // if class is selected-style, add itemCost; else, subtract
  if (selectedOption.classList.contains("selected-style")) {
    itemCost = getItemCost(selectedOption.innerHTML);
    updateSubtotal(itemCost);
  } else {
    itemCost = getItemCost(selectedOption.innerHTML);
    updateSubtotal(-itemCost);
  }
}

function updateSubtotal(itemCost) {
  currentSubtotal = subTotalSpan.innerHTML;
  newSubtotal = Number(currentSubtotal) + itemCost;
  newSubtotal = newSubtotal.toString();
  subTotalSpan.innerHTML = newSubtotal;
}

function getItemCost(selectionText) {
  // use regex (maybe) to parse last digits of selection innerHTML for price
  if (selectionText.includes("+")) {
    plusPos = selectionText.indexOf("+");
    lessThanPos = selectionText.lastIndexOf("<");
    itemCost = selectionText.slice(plusPos+1,lessThanPos);
    console.log(itemCost);
    itemCost = Number(itemCost);
    return itemCost;
  } else {
    itemCost = 0;
    return itemCost;
  }
}
