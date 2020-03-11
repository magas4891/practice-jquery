function blink () {
    console.log("!!!!!!");
    $(".blink").fadeOut(500);
    $(".blink").fadeIn(500);
}

setInterval(blink, 1000);