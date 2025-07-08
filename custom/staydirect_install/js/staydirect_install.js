(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.customFormExample = {
      attach: function (context, settings) {
        console.log("hello");
        function updateSubmitButtonState() {
            var $checkbox = $('#edit-agree');
            var $submitButton = $('.install-settings-form').find('#edit-save');
            if(!$checkbox.prop('checked')){
              $submitButton.addClass('disable-agree');
            }else{
              $submitButton.removeClass('disable-agree');
            }
            // Enable or disable the submit button based on the checkbox state.
            $submitButton.prop('disabled', !$checkbox.prop('checked'));

          }
    
          // Add an event listener to the checkbox.
          $('#edit-agree').on('change', function () {
            // Update the submit button state when the checkbox changes.
            updateSubmitButtonState();
          });
    
          // Update the submit button state when the form is loaded.
          updateSubmitButtonState();
      }
    };
  })(jQuery, Drupal, drupalSettings);
  