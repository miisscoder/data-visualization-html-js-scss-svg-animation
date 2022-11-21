
const myAudio = document.getElementById('myAudio'); 
$('.tab').click(function () {
    myAudio.play();
    const id = $(this).attr('data-id'); 
    if ('1' === id || '2' === id) {
        $('.tab-container').attr('data-active', 'false');
        $('.tab-container-1').attr('data-active', 'true');
        $('.tab').removeClass('active');
        $('.tab[data-id="1"]').addClass('active');
        $('.tab[data-id="2"]').addClass('active');
        $('.brief-box').css({
            'width': 0, 'height': 0, 'opacity': 0
        }); 
    } else if ('3' === id || '4' === id) {
        $('.tab-container').attr('data-active', 'false');
        $('.tab-container-2').attr('data-active', 'true');
        $('.tab').removeClass('active');
        $('.tab[data-id="3"]').addClass('active');
        $('.tab[data-id="4"]').addClass('active');
        $('.brief-box').css({
            'width': 0, 'height': 0, 'opacity': 0}); 
    } else if ('5' === id || '6' === id) {
        $('.tab-container').attr('data-active', 'false');
        $('.tab-container-3').attr('data-active', 'true');
        $('.tab').removeClass('active');
        $('.tab[data-id="5"]').addClass('active');
        $('.tab[data-id="6"]').addClass('active');
        briefShow();
        numberUp();
    }
});
function briefShow() {
    $('.brief-box').animate({
        width: '100%',
        opacity: 1
    }, 400, function () {
        $('.brief-box').animate({ height: '100%' }, 400);
    });
}

function numberUp() {
    new CountUp('number1', 0, Number($('#number1').attr('data-d')), 0, 3).start();
    new CountUp('number2', 0, Number($('#number2').attr('data-d')), 0, 3).start();
    new CountUp('number3', 0, Number($('#number3').attr('data-d')), 0, 3).start();
    new CountUp('number4', 0, Number($('#number4').attr('data-d')), 0, 3).start();
    new CountUp('number5', 0, Number($('#number5').attr('data-d')), 0, 3).start();
    new CountUp('number6', 0, Number($('#number6').attr('data-d')), 0, 3).start();
}
$(function () {
    lightBox('.light-box1');
    lightBox('.light-box2');
    lightBox('.light-box3');
    lightBox('.light-box4');
    lightBox('.light-box5');
    lightBox('.light-box6');
});

// light box animation
function lightBox(elem) {
    var box = $(elem);
    var num = -1;
    var html = ''
    for (var i = 0; i < 11; i++) {
        html += '<span></span>';
    }
    box.append(html);
    var item = box.find('span');

    function changeStyle() {
        item.each(function (i, el) {
            i <= num ? $(el).addClass('on') : $(el).removeClass('on');
        })
    }
    changeStyle();

    var lightTimer = setInterval(() => {
        num++;
        if (num >= 11) num = -1;
        changeStyle();
    }, 300)
}