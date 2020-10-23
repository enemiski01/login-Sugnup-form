$(document).ready(function () {

    //Form Validation

    $('#email').on('focusout', function () {

        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }

        if ($(this).val() != "") {

            if (validateEmail($(this).val())) {
                $(this).css('border', '1px solid green')
                $('#error').text('');
            } else {
                $(this).css('border', '1px solid red')
                $('#error').text('Invalid email Address');
            }

        } else {
            $(this).css('border', '1px solid red')
            $('#error').text('Email is required');
        }

    });

    $('#password').on('focusout', function () {

        if ($(this).val() != "") {

            $(this).removeClass('is-invalid').addClass('is-valid')
            $('#error').text('');

        } else {
            $(this).addClass('is-invalid')
            $('#error').text("Password is required");
        }

    });

    $('#password2').on('focusout', function () {

        if ($(this).val() != "") {

            $(this).removeClass('is-invalid').addClass('is-valid')
            $('#error').text('');

        } else {
            $(this).addClass('is-invalid')
            $('#error').text("Re-Password is required");
        }

    });

    $('#name').on('focusout', function () {

        if ($(this).val() != "") {

            $(this).css('border', '1px solid green')
            $('#error').text('');

        } else {
            $(this).css('border', '1px solid rgb(212, 212, 212)')
        }

    })

});