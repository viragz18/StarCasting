$(function () {

    $.validator.addMethod("alphanumeric", function (value, element) {
        return this.optional(element) || /^\w+$/i.test(value);
    }, "Letters, numbers, and underscores only please");

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    $.validator.addMethod("numbersonly", function (value, element) {
        return this.optional(element) || /^[0-9]+$/i.test(value);
    }, "Numbers only please");

    $.validator.addMethod( "zipcodeUS", function( value, element ) {
        return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
    }, "The specified US ZIP Code is invalid");

    $.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
    }, "Please specify a valid phone number");

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
    }, "Please select type");

    //$.validator.addMethod("notEqual", function (value, element, param) {
    //    return this.optional(element) || value != param;
    //}, "Please specify a different (non-default) value");

    //$.validator.addMethod('passwordMatch', function (value, element) {

    //    // The two password inputs
    //    var password = $("#password").val();
    //    var confirmPassword = $("#cfmpassword").val();

    //    // Check for equality with the password inputs
    //    if (password != confirmPassword) {
    //        return false;
    //    } else {
    //        return true;
    //    }

    //}, "Your Passwords Must Match");

    // configure your validation
    
        
    

    $("form[name='Contact']").validate({
        // Specify validation rules
        rules: {         
            name:{
                required: true,
                maxlength: 30,
                lettersonly: true
            },
            message: {
                required: true,
                maxlength: 300
            },
            subject: {
                valueNotEquals: "default"               
            },
           
            email: {
                required: true,
                email: true
            }
            
        },

        messages: {
            subject: { valueNotEquals: "Please select Subject" }
        },  
        
        submitHandler: function (form) {
            alert('Thank you for your feedback');
            form.submit();
            
        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
                error.insertAfter(element);
            //}
        }
     
    });

    $("form[name='fanscript']").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },
            idea: {
                required: true,
                maxlength: 500
            },
            contact: {
                required: true,
                phoneUS: true
            },

            email: {
                required: true,
                email: true
            }

        },

        messages: {
            subject: { valueNotEquals: "Please select Subject" }
        },

        submitHandler: function (form) {
            alert('Your idea has been posted');
            form.submit();

        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
            error.insertAfter(element);
            //}
        }

    });

    $("form[name='signup']").validate({
        // Specify validation rules
        rules: {
            firstname: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },

            lastname: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },

            password: { 
                required: true,
                minlength: 6,
                maxlength: 10,

            },

            type: {
                valueNotEquals: "default"
            },

            cfmpassword: { 
                equalTo:"#password",
                minlength: 6,
                maxlength: 10
            },

            
            email: {
                required: true,
                email: true
            }

        },

       

        submitHandler: function (form) {
            alert('Your Account has been created');
            form.submit();

        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
            error.insertAfter(element);
            //}
        }

    });

    $("form[name='settings']").validate({
        // Specify validation rules
        rules: {
            password: {
                required: true,
                minlength: 6,
                maxlength: 10,

            },

            cfmpassword: {
                equalTo: "#password",
                minlength: 6,
                maxlength: 10
            },

           


            cemail: {
                required: true,
                email: true
            },

            nemail: {
            required: true,
            email: true
                    }

        },

       

        submitHandler: function (form) {
            alert('Thank you for your feedback');
            form.submit();

        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
            error.insertAfter(element);
            //}
        }

    });


    $("form[name='editProfile']").validate({
        // Specify validation rules
        rules: {
            firstname: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },

            lastname: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },
            phone: {
                required: true,
                phoneUS: true
            },

            email: {
                required: true,
                email: true
            },

            address: {
                required: true,
                alphanumeric: true
            }

        },



        submitHandler: function (form) {
            alert('Changes Saved');
            form.submit();

        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
            error.insertAfter(element);
            //}
        }

    });

    $("form[name='education']").validate({
        // Specify validation rules
        rules: {
            univ_name: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },

            major_name: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },
            year: {
                required: true,
                numbersonly: true,
                maxlength:4
            }

            

        },



        submitHandler: function (form) {
            alert('Changes Saved');
            form.submit();

        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
            error.insertAfter(element);
            //}
        }

    });

    $("form[name='experience']").validate({
        // Specify validation rules
        rules: {
            comp_name: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },

            designation: {
                required: true,
                maxlength: 30,
                lettersonly: true
            },
            Achievements: {
                required: true,
                maxlength: 300
            }



        },



        submitHandler: function (form) {
            alert('Changes Saved');
            form.submit();

        },

        highlight: function (input, errorClass) {
            $(input).closest('.control-group').removeClass('error');
        },

        errorPlacement: function (error, element) {
            //if (element.attr("type") == "radio") {
            //    error.insertAfter("#fradio");
            //} else {
            error.insertAfter(element);
            //}
        }

    });

});
