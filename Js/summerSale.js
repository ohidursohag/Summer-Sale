// Add cart items on list and Total price
let getTotal = 0;
function cardItemClick(target) {
   const getProductName = target.children[2].innerText;
   const getProductPrice = target.children[3].children[0].innerText
   AddCartListItems(getProductName);
   getTotal += Number(getProductPrice);
   displayValue('totalPrice', getTotal);
   displayValue('finalTotal', getTotal);

   // Enabel coupun apply button if total price is more than or equal to 200 tk
   if (getTotal >= 200) {
      btnCouponApply.disabled = false; 
      couponCode.disabled = false; 
   }
   // Enable the make purchese button at least one item added to the cart
   if (getTotal > 0) {
      bntPurchase.disabled = false; 
   }
   // item added to cart confirmation popup
   confirmationPopup('addeditemPopup');
   
   /* When user once Apply the coupon code then agin add items to the cart discount amount & to Pay price automatic update according to new total price */
   if (Number(document.getElementById('discountPrice').innerText) > 0) {
      const discount = getTotal * 0.2;
      displayValue('discountPrice', discount);
      const finalTotalPrice = getTotal - discount;
      displayValue('finalTotal', finalTotalPrice);
   }
}

//Get and Apply discount
btnCouponApply.addEventListener('click', function () {
   if (couponCode.value ==='SELL200') {
      const discount = getTotal * 0.2;
      displayValue('discountPrice', discount);
      const finalTotalPrice = getTotal - discount;
      displayValue('finalTotal', finalTotalPrice);
      couponCode.value = '';
   } else {
      alert('Please input a valid Coupon');
      couponCode.value = '';
      return;
   }
});

// Clear All Cart and Price Data click on Go Home Buton
function clearAll() {
   clearValue('totalPrice');
   clearValue('discountPrice');
   clearValue('finalTotal');
   cartItemListContainer.innerHTML = '';
   bntPurchase.disabled = true;
   btnCouponApply.disabled = true;
   couponCode.disabled = true;
   getTotal = 0;
}

// input Coupon Code by clicking on Promo code
function inputCouponCode() {
   if (getTotal >= 200) {
      couponCode.value = 'SELL200'
   } else {
      alert(`You Have to Purchase TK 200 or above & get 20 % off`);
   }
}


