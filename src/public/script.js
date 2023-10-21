// dropdown
let myDrop = document.getElementById("myDrop");
let buttonDrop = document.getElementById("buttonDrop");
buttonDrop.textContent = "Product ▼";
buttonDrop.addEventListener("mouseover", () => {
  if (myDrop.style.visibility === "visible") {
    myDrop.style.visibility = "hidden";
    buttonDrop.textContent = "Product ▼";
  } else {
    myDrop.style.visibility = "visible";
    buttonDrop.textContent = "Product ▲";
  }
});

// confirm
function inactivateProduct() {
  confirm("Are you sure you want to inactivate this product?");
}
function saveChanges() {
  var ask = window.confirm("Are you sure you want to save all changes?");
  if (ask) {
      window.alert("All changes saved.");
      window.location.href="index.html";
  }
}

// Functions for IMS needs fixing
// add, subtract, set stock quantity
$(function () {

  $('.stock-control').each(function () {

var $control = $(this);
var $id = $control.find('.txt-id');
var $amount = $control.find('.txt-amount');
var $total = $control.find('.lbl-total');

function RenderAmount() {
    $total.text(StockRecorder.GetAmount($id.val()));
};

$('.btn-add').click(function () {
    var stock = parseInt($total.text()) + parseInt($amount.val());
    StockRecorder.Update($id.val(), stock);
    RenderAmount();
});

$('.btn-sub').click(function () {
    var stock = parseInt($total.text()) - parseInt($amount.val());
    StockRecorder.Update($id.val(), stock);
    RenderAmount();
});

$('.btn-set').click(function () {
    StockRecorder.Update($id.val(), parseInt($amount.val()));
    RenderAmount();
});

// initialize
RenderAmount();

});

});