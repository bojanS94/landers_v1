$('#btn, plan_btn').click(function () {
    $('#form').fadeIn('fast');
    $('body').css('overflow', 'hidden');
});

$('.close').click(function () {
    $('#form').fadeOut('fast');
    $('body').css('overflow', 'auto');
});

$('.burger').click(function () {

    $('.links').slideToggle('fast');
    $('#wrapper').toggleClass('margin');

});

$('#saveForm').click(function (e) {
    e.preventDefault();
});