"use strict";

$(function(){

var subtotal=0;

  $('.burger').on('click', function(){
    $('.items').append("<tr><td>" + " Royale with Cheese " + "</td><td class='right-align'> " + " $8.99" + "</td></tr>");
    subtotalFunc(8.99)
  });

  $('.pizza').on('click', function(){
    $('.items').append("<tr><td>" + " Arugula Pizza " + "</td><td class='right-align'> " + " $11.99" + "</td></tr>");
    subtotalFunc(11.99)
  });

  $('.ribs').on('click', function(){
    $('.items').append("<tr><td>" + " Smoked Ribs " + "</td><td class='right-align'> " + " $14.99" + "</td></tr>");
    subtotalFunc(14.99)
  });

  $('.biscuit').on('click', function(){
    $('.items').append("<tr><td>" + " Ice Cream Biscuit " + "</td><td class='right-align'> " + " $7.99" + "</td></tr>");
    subtotalFunc(7.99)
  });

  var subtotalFunc = function(itemAmount){
    // $(".cart").removeClass('hidden');
    subtotal+=itemAmount
    subtotal = parseFloat((Math.round(subtotal * 100) /100).toFixed(2));
    $('.subtotalAmount').text('$' + subtotal);
    taxFunc(subtotal);
  }

  var taxFunc = function(subtotal){
    var totalTax = (subtotal * .06);
    totalTax = parseFloat((Math.round(totalTax * 100) /100).toFixed(2));
    console.log(typeof totalTax, " totalTax after round");
    $('.taxAmount').text('$' + totalTax);
    orderTotal(subtotal, totalTax);
  }

  var orderTotal = function(subtotal, totalTax){
    var total = (subtotal + totalTax);
    total = (Math.round(total * 100) /100).toFixed(2);
    // console.log(total);
    $('.totalAmount').text('$' + total);
  }

  $('#submitForm').on('click', function(e){
    e.preventDefault();
    var name= $('#customerName[name="customerName"]').val();
    var phone=$('#customerPhone[name="customerPhone"]').val();
    var address=$('#address[name="address"]').val();

    if(subtotal>0){

      if(name && phone && address){
        // console.log(name);
        // console.log(phone);
        // console.log(address);
      }else{
        Materialize.toast("You're missing some required information, please input your name, phone number and address.", 4000)
      }
    }else{
      Materialize.toast("There is nothing in your cart. Please add an item to the cart.", 4000)
    }
  });

  // initialize nav bar
  $(".button-collapse").sideNav();

}); // end of document ready
