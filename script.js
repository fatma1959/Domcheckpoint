var btnsAddTag = document.getElementsByClassName("plus");
for (var i = 0; i < btnsAddTag.length; i++) {
    btnsAddTag[i].addEventListener("click", increment);
}
function increment(event) {
    var btnPlus = event.target;
    var divel = btnPlus.parentElement;
    var quantityTag = divel.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    quantity++;
    quantityTag.innerHTML = quantity;
    var priceTag = divel.parentElement.parentElement.querySelector(".price");
    var UnitpriceTag = divel.parentElement.parentElement.querySelector(".unitPrice");
    var Unitprice = Number(UnitpriceTag.innerHTML);
    var price = Unitprice * quantity
    priceTag.innerHTML = price;
}
var btnsminTag = document.getElementsByClassName("minus");
for (var i = 0; i < btnsminTag.length; i++) {
    btnsminTag[i].addEventListener("click", mincrement);
}
function mincrement(event) {
    var btnmins = event.target;
    var divel = btnmins.parentElement;
    var quantityTag = divel.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    if (quantity <= 0) {
        quantity = 0;
    }
    else { quantity--; }
    quantityTag.innerHTML = quantity;
    var priceTag = divel.parentElement.parentElement.querySelector(".price");
    var UnitpriceTag = divel.parentElement.parentElement.querySelector(".unitPrice");
    var Unitprice = Number(UnitpriceTag.innerHTML);
    var price = Unitprice * quantity
    priceTag.innerHTML = price;
}
var checkTag = document.getElementsByClassName("check")
for (var i = 0; i < checkTag.length; i++) {
    checkTag[i].addEventListener("click", totalPrice);
}
function totalPrice(event) {
    var checktag = event.target;
    var priceTag = checktag.parentElement.parentElement.querySelector(".price");
    console.log(priceTag)
    var btnplus = checktag.parentElement.parentElement.querySelector(".plus");
    var btnminus = checktag.parentElement.parentElement.querySelector(".minus");
    var price = Number(priceTag.innerHTML);
    var totalTag = document.getElementById("total");
    console.log(totalTag)
    var total = Number(totalTag.innerHTML);
   
    if (checktag.checked === true) {
       total+=price
        btnplus.setAttribute("disabled", true);
        btnminus.setAttribute("disabled", true);
    }
    else {
        total-= price
        btnplus.removeAttribute("disabled");
        btnminus.removeAttribute("disabled");
    }
    totalTag.innerHTML= total;
}
var likeTag = document.getElementsByClassName("like")
for (var i = 0; i < likeTag.length; i++) {
    likeTag[i].addEventListener("click", likeme);
}
function likeme(event) {
    var likemetag = event.target;
    likemetag.style.color = 'red';
}
var suppTag = document.getElementsByClassName("delete") 
for (var i = 0; i < suppTag.length; i++) { 
    suppTag[i].addEventListener("click", supp); } 
    function supp(event) {
         var supptag = event.target; 
         var childElem = supptag.parentElement.parentElement.parentElement.parentElement;
          var parentElem = document.querySelector("tbody"); 
parentElem.removeChild(childElem); }







