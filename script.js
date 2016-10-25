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

  $('#submitForm').on('click', function(){
    var name= $('#customerName[name="customerName"]').val();
    var phone=$('#customerPhone[name="customerPhone"]').val();
    var phone=$('#customerPhone[name="customerPhone"]').val();
    console.log(name + " " + phone);
  });

}); // end of document ready
