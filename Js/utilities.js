const cartItemListContainer = document.getElementById('cartItemListContainer');

const bntPurchase = document.getElementById('bntPurchase');
const btnCouponApply = document.getElementById('btnCouponApply');
const couponCode = document.getElementById('couponCode');

// initially Disabled the cuponApply and Make Purchase buttons
bntPurchase.disabled = true;
btnCouponApply.disabled = true;
couponCode.disabled = true;

// Add items on Cart list
function AddCartListItems(itemName) {
   const count = cartItemListContainer.childElementCount;
   let item = document.createElement('p');
   item.innerHTML = `${count + 1}. ${itemName}`;
   cartItemListContainer.appendChild(item);
}

// Show Values
function displayValue(id, value) {
   const getElement = document.getElementById(id);
   getElement.innerText = value.toFixed(2);
}

// clear Values
function clearValue(id) {
   const getElement = document.getElementById(id);
   getElement.innerText = '0.00';
}

// Add item on cart confirmation popup
function confirmationPopup(id) {
   var element = document.getElementById(id);
   element.className = "show";

   // After 3 seconds, remove the show class from DIV
   setTimeout(function () { element.className = element.className.replace("show", ""); }, 500);
}