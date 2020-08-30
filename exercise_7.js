const maxLength = 15;
$("#textarea").keyup(function() {
    let currentLength = $(this).val().length;
    $("#rchars").text(maxLength - currentLength);
});