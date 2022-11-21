
$('.right.right-4 .btn-back').click(function () {
    $('.right.right-4').attr('data-status', '');
    $('.right.right-4').attr('data-active', 0);

});

$('.right.right-4 .img-icon').click(function () {
    $('.right.right-4').attr('data-status', 'des');
    const id = $(this).attr('data-id');
    $('.right.right-4').attr('data-active', id);
    console.log(id);
    $('.right.right-4 .img-icon').removeClass('active');  
    $('.right.right-4 .img-4-' + id).addClass('active');
    $('.right.right-4 .img-4-des').removeClass('active');
    $('.right.right-4 .img-4-des-' + id).addClass('active');
});