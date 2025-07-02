(function($, Drupal, drupalSettings) {
    Drupal.behaviors.BookingBehavior = {
        attach: function(context, settings) {
            // get color_body value with "drupalSettings.mymodule.color_body"
            const bookedDatesInt = drupalSettings.bookedDates;
            const defaultPrice = drupalSettings.priceDefault;
            const priceList = drupalSettings.priceList;
            const DateTime = easepick.DateTime;
            const bookedDates = bookedDatesInt.map(d => {
                if (d instanceof Array) {
                    const start = new DateTime(d[0], 'YYYY-MM-DD');
                    const end = new DateTime(d[1], 'YYYY-MM-DD');
                    return [start, end];
                }
                return new DateTime(d, 'YYYY-MM-DD');
            });

            const picker = new easepick.create({
                element: document.getElementById('datepicker'),
                css: [
                    '/themes/custom/staydirect_template_1/vendor/easepick/easepick.min.css',
                    '/themes/custom/staydirect_template_1/css/booking-form.css'
                ],
                plugins: ['RangePlugin', 'LockPlugin'],
                RangePlugin: {
                    tooltipNumber(num) {
                        return num;
                    },
                    locale: {
                        one: 'day',
                        other: 'days',
                    },
                },
                LockPlugin: {
                    minDate: new Date(),
                    minDays: 1,
                    inseparable: true,
                    filter(date, picked) {
                        if (picked.length === 1) {
                            const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                            return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                        }
                        return date.inArray(bookedDates, '[)');
                    },
                },
                setup(picker) {
                    picker.on('select', (e) => {
                        const { start, end } = e.detail;
                        const date = new Date(start.getTime());
                        let price = 0;
                        while (date <= end) {
                            const datenew = formatDate(new Date(date));
                            if (priceList[datenew] !== undefined) {

                                price = price + parseFloat(priceList[datenew]);
                            } else {
                                price = price + parseFloat(defaultPrice);
                            }
                            date.setDate(date.getDate() + 1);
                        }
                        //   console.log(price);
                        jQuery('#datepickerVal').val(price);
                        caluction();
                        jQuery("#btn-booking").removeClass("hidden");

                    });
                    // add price to day element
                    picker.on('view', (evt) => {
                        const { view, date, target } = evt.detail;
                        const d = date ? date.format('YYYY-MM-DD') : null;
                        if (view === 'CalendarDay' && priceList[d]) {
                            const valeur = parseInt(priceList[d], 10);
                            const formate = formatToK(valeur);
                            const span = target.querySelector('.day-price') || document.createElement('span');
                            span.className = 'day-price';
                            span.innerHTML = `$${formate}`;

                            target.append(span);
                        }
                    });
                }
            });

            function getDatesInRange(startDate, endDate) {
                const date = new Date(startDate.getTime());
                const dates = [];
                while (date <= endDate) {
                    const datenew = formatDate(new Date(date));
                    dates.push(datenew);
                    date.setDate(date.getDate() + 1);
                }

                return dates;
            }

            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [year, month, day].join('-');
            }
            /** checkbox **/
            jQuery('input.form-check-input[type="checkbox"]').click(function() {
                const price = jQuery(this).parent().find('#myval').html();
                if (jQuery(this).prop("checked") == true) {
                    jQuery(this).val(price);
                    caluction();

                } else if (jQuery(this).prop("checked") == false) {
                    jQuery(this).val(0);
                    caluction();
                }
            });
            jQuery('select').on('change', function() {
                caluction();
            });
            
            // format price on CalendarDay 
            function formatToK(num) {
              if (num >= 1000) {
                return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
              }
              return num.toString();
            }

            function caluction() {
                let total = 0.00;
                // let url = "";
                jQuery('.booking-form input.Dym, .booking-form select.Dym').each(
                    function(index) {
                        var input = $(this);
                        var val = input.val();
                        if (input.val().includes("----")) {
                            let array_val = input.val().split("----");
                            val = array_val[1];
                        }
                        if (jQuery.isNumeric(val)) {
                            total = total + parseFloat(val);
                        }

                    }
                );
                if(document.getElementById('total_prix')){
                    let formatted = total.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    });
                    document.getElementById('total_prix').innerHTML = "$" + formatted;
                }            
                jQuery("#total_prix_hidden").val(total);
            }

            $(document).ready(function() {
                caluction();
                $("input[type='number']").inputSpinner({ buttonsOnly: true });
                $("input[type='number']").on("change", function(event) {
                    var $valueOnChangeAmount = $(this).parent().parent().find('.qty-input');
                    var $valueOnChange = $(this).parent().parent().find('.qty-input-display');
                    var $montant = $(this).parent().parent().find('.qty-montant').val();
                    var qty = $(event.target).val();
                    var $total = parseFloat(qty) * parseFloat($montant);
                    $valueOnChange.html($total.toFixed(2));
                    $valueOnChangeAmount.val($total);
                    caluction();
                })


          
            
                var swiper = new Swiper(".swipper--booking", {
                  spaceBetween: 30,
                  centeredSlides: true,
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
                  /*pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },*/
                });
            });
        }
    };
})(jQuery, Drupal, drupalSettings);