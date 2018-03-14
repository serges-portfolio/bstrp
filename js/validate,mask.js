
/*___________________input-mask__________*/

$(document).ready(function() {
    $("#reference-tel").mask("+7 (999) 999-99-99");
});



/*___________VALIDATOR______________*/


$("#reference_form").validate({

    rules: {
        reference_tel: {
            required: true
        }
    },
    messages: {
        reference_tel: {
            required: "Это поле обязательно нужно заполнить"
        }
    }
});

