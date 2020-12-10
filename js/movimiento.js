$(document).ready(function(){
    // IR A LOS ELEMENTOS DEL MENU
    $('#btn-acerca-de').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 400
    }, 500);
    })

    $('#btn-trabajos').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 900
    }, 500);
    })

    $('#btn-contacto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 1600
    }, 500);
    })
});