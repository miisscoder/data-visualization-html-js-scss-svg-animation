
$('.right.right-5 .items .item').click(function () {
    const id = $(this).attr('data-id');
    $('.right.right-5 .items .item').removeClass('active');
    $(this).addClass('active');
    $('.right.right-5 .outer-text-left').removeClass('active');
    $('.right.right-5 .outer-text-right').removeClass('active');
    $('.right.right-5 .outer-text-left[data-id=' + id + ']').addClass('active');
    $('.right.right-5 .outer-text-right[data-id=' + id + ']').addClass('active');

    $('.right.right-5 .section-5-2-top .text').removeClass('active');
    $('.right.right-5 .section-5-2-top .text[data-id=' + id + ']').addClass('active');


    if (id === '6') {
        new CountUp('left' + id, 0, Number($('#' + 'left' + id).attr('data-d')), 0, 3).start();
        new CountUp('right' + id + '1', 0, Number($('#' + 'right' + id + '1').attr('data-d')), 0, 3).start();
        new CountUp('right' + id + '2', 0, Number($('#' + 'right' + id + '2').attr('data-d')), 0, 3).start();
    } else {
        new CountUp('left' + id, 0, Number($('#' + 'left' + id).attr('data-d')), 0, 3).start();
        new CountUp('right' + id, 0, Number($('#' + 'right' + id).attr('data-d')), 0, 3).start();
    } 
});
 