const selectionItem = document.querySelectorAll(".selection-item");
const subTotalSpan = document.getElementById("sub");
let pizzaQuantity = document.querySelector(".pizza-quantity-number");

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

  //find out if multiple items can be selected
  if (selectedOption.parentNode.classList.contains("multiple-choice-true")) {

  } else {
    // if multiple cannot be selected:
    // get parentNode and do forEach on each of its children;
    // if any children have "selected-style" class (besides selected that was just clicked),
    // remove that class and add it to the current selection
  }

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

function changeQuantity(item, plusOrMinus, canBeZero) {
  q = Number(item.innerHTML);
  if (plusOrMinus === 1) {
    q += 1;
    item.innerHTML = q;
  } else {
    // if statement to ensure quantity doesn't go negative (or below 1 if 1 was chosen min)
    if (canBeZero === 1) {
      if (q >= 1) {
        q -= 1;
        item.innerHTML = q;
      }
    } else {
      if (q >= 2) {
        q -= 1;
        item.innerHTML = q;
      }
    }

  }
}
