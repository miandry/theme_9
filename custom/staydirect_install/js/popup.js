



jQuery('a.poptemplate1').confirm({
    title: '',
    content: '<div class=contframe><iframe width="100%" height="700px" src="https://staydirecttech.com/template1"  title="Iframe Example"></iframe></div>',
    columnClass: 'contentframe col-md-12',
    buttons: {
        close: function () {
        }
    }
});

jQuery('a.poptemplate2').confirm({
    title: '',
    content: '<div class=contframe><iframe width="100%" height="700px" src="https://staydirecttech.com/template2"  title="Iframe Example"></iframe></div>',
    columnClass: 'contentframe col-md-12',
    buttons: {
        close: function () {
        }
    }
});

jQuery('a.poptemplate3').confirm({
    title: '',
    content: '<div class=contframe><iframe width="100%" height="700px" src="https://staydirecttech.com/template3"  title="Iframe Example"></iframe></div>',
    columnClass: 'contentframe col-md-12',
    buttons: {
        close: function () {
        }
    }
});
jQuery('.element').click(function(){
      var t = jQuery(this).attr('id');
      jQuery("#theme_select").val(t);
      jQuery('.element').removeClass('active');
      jQuery(this).addClass('active');
});