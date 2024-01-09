jQuery.mobile.document // "filter-menu-menu" is the ID generated for the listview when it is created // by the custom selectmenu plugin. Upon creation of the listview widget we // want to prepend an input field to the list to be used for a filter.
  .on("listviewcreate", "#filter-menu-menu", function (e) {
    var input,
      listbox = $("#filter-menu-listbox"),
      form = listbox.jqmData("filter-form"),
      listview = $(e.target); // We store the generated form in a variable attached to the popup so we // avoid creating a second form/input field when the listview is // destroyed/rebuilt during a refresh.
    if (!form) {
      input = jQuery("<input data-type='search'></input>");
      form = jQuery("<form></form>").append(input);
      input.textinput();
      jQuery("#filter-menu-listbox").prepend(form).jqmData("filter-form", form);
    } // Instantiate a filterable widget on the newly created listview and // indicate that the generated input is to be used for the filtering.
    listview.filterable({ input: input });
  }) // The custom select list may show up as either a popup or a dialog, // depending how much vertical room there is on the screen. If it shows up // as a dialog, then the form containing the filter input field must be // transferred to the dialog so that the user can continue to use it for // filtering list items. // // After the dialog is closed, the form containing the filter input is // transferred back into the popup.
  .on("pagebeforeshow pagehide", "#filter-menu-dialog", function (e) {
    var form = $("#filter-menu-listbox").jqmData("filter-form"),
      placeInDialog = e.type === "pagebeforeshow",
      destination = placeInDialog
        ? $(e.target).find(".ui-content")
        : $("#filter-menu-listbox");
    form
      .find("input") // Turn off the "inset" option when the filter input is inside a dialog // and turn it back on when it is placed back inside the popup, because // it looks better that way.
      .textinput("option", "inset", !placeInDialog)
      .end()
      .prependTo(destination);
  });


  
jQuery(document).ready(function () {
  var $rows = $("#table-column-toggle tbody tr");
  var total = 0;
  $rows.each(function () {
    total += parseFloat($(this).find(".valor").text());
  });
  $("#save").click(function () {
    var total = 0;
    $("#table-column-toggle tbody tr:visible").each(function () {
      if ($(this).attr("subtotal-content ui-screen-hidden")) {
      } else {
        total += parseFloat($(this).find(".valor").text());
      }
    });
    $(".total").text(total);
    $(".text-total").text("Total");
    console.log(total);
  });
  $(".total").html(total);
  $(".text-total").text("Total");

  $("#filterTable-input").keyup(function () {
    $(".total").text("");
    $(".text-total").text("");
  });
});

//script to change content
$(document).on("click",".popupcontentchanger",function(event){
  var newhtml = $(this).attr("data-value-custom");
  var id = $(this).attr("data-id-custom");
  $(document).on("popupafteropen", "#popupBasic", function (e) {
      $("#popupBasic #mytitle").html(newhtml);
      $("#popupBasic").find("#nid").val(id);
  });
});