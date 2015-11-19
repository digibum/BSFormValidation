function ValidateInput(obj) {
    var _valid = true;
    var _tester = null;
    (obj != null ? _tester = obj : _tester = ".form-control:required")

    $(_tester).each(function () {
        if ($(this).val() == "") {
            $(this).closest(".form-group, .input-group").addClass("has-error");
            _valid = false;
        }
        else {
            if ($(this).attr('type') == "email") {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!regex.test($(this).val())) {
                    $(this).closest(".form-group, .input-group").addClass("has-error");
                    _valid = false;
                } else {
                    $(this).closest(".form-group, .input-group").removeClass("has-error");
                }

            } else
                $(this).closest(".form-group, .input-group").removeClass("has-error");
        }

    });
    return _valid;
}
$(".form-control:required").blur(function () {
    ValidateInput($(this));
});