/**
 *  class .mz-quantity is button increase of qte
 *  class .mz-quantity-value is the input value of qte
 * **/
jQuery(".mz-quantity").click(function () {
    var qte = jQuery(this).parent().find(".mz-quantity-value").val();
    var price = jQuery(this).parent().find(".mz-price").val();

    jQuery(this).parents('.mz-cart').find(".mz-amount-display").html(parseFloat(qte)*parseFloat(price));
    jQuery(this).parents('.mz-cart').find(".mz-amount-value").val(parseFloat(qte)*parseFloat(price));
    console.log("price = " + parseFloat(qte)*parseFloat(price));
});