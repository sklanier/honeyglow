/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

/* PRODUCT PAGE LOWERCASE FIX FOR REVIEWS */
// document.getElementsByClassName('Collapsible__Button Heading u-h6')[5].innerText="reviews";





// let descriptions = document.getElementsByClassName('desc-txt');
// let products = document.getElementsByClassName('product-container');
// let prices = document.querySelectorAll('p.product-price');
// for (let i=0; i<=4; i++){
//     products[i].addEventListener('mouseover', ()=> {
//         prices[i].style.visibility = "initial"
//         descriptions[i].style.color = "#4D2614"
//     });
//     products[i].addEventListener('mouseout', ()=> {
//         prices[i].style.visibility = "hidden"
//         descriptions[i].style.color = "#dfd1c4"
//     });
// };

// if (document.getElementsByClassName("stamped-summary-text-1")[0].innerText == "0.0"){
//   document.getElementsByClassName("stamped-summary-text-1")[0].innerText = "write a review";
// }

// document.getElementsByClassName("stamped-summary-text-1")[0].style.fontSize = "24px";
