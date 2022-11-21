
$(function () {
    $('#loader').shCircleLoader({ color: "#00deff" });

    //加载资源
    var loader = new resLoader({
        resources: [
            './image/2-1-logo.png',
            './image/2-bk-1.png',
            './image/2-bk-2.png', './image/2-l-1-1.jpg', './image/2-l-1-2.jpg', './image/2-l-1-3.jpg', './image/2-l-1-bk.svg',
            './image/2-l-2-bk-1.png', './image/2-l-2-bk-2.png', './image/2-m-1-bk-1.png', './image/2-m-1-bk-2.png', './image/2-m-6.png',
            './image/2-r-1-bk-1.svg', './image/back.svg', './image/bk-2.png', './image/bk-3.svg', './image/bk.jpg',
            './image/btn-bk-active.png', './image/btn-bk.png', './image/icon-1.png', './image/icon-2.png', './image/icon-3.png',
            './image/icon-4.png', './image/icon-5.png', './image/icon-6.png', './image/icon-7.png', './image/icon-8.png',
            './image/l-1.svg', './image/l-2-1.svg', './image/l-2-2.svg', './image/l-2-3.svg', './image/l-2-4.svg',
            './image/l-2-5.svg', './image/l-3-1.png', './image/l-3-2.png', './image/l-3-3.png', './image/l-3-4.png',
            './image/l-3-5.png', './image/l1-bk-1.png', './image/l1-bk-2.png', './image/l1-circle.png', './image/legand-bar-1.png',
            './image/legand-bar-2.png', './image/legand-bar-3.png', './image/line.png', './image/map-1-b.png',
            './image/map-1.svg', './image/map-bk.png', './image/r-1.jpg', './image/r-1.png', './image/r-1.svg',
            './image/r-10.png', './image/r-11.png', './image/r-12.png', './image/r-2.jpg', './image/r-2.png',
            './image/r-2.svg', './image/r-3.png', './image/r-3.svg', './image/r-4.png', './image/r-4.svg',
            './image/r-5.png', './image/r-5.svg', './image/r-6.png', './image/r-6.svg', './image/r-7.png',
            './image/r-8.png', './image/r-9.png', './image/r-i-1.png', './image/r-i-2.png', './image/r-i-3.png',
            './image/tab-1-1.svg', './image/tab-1-3-1.svg', './image/tab-1-3-2.svg', './image/tab-1-3-3.svg',
            './image/tab-1-3-4.svg', './image/tab-1-3-5.svg', './image/tab-1-3-6.svg', './image/tab-1-3-7.svg', './image/tab-1-3-8.svg',
            './image/tab-1-3.svg', './image/tab-2-1.svg', './image/tab-2-2.svg', './image/tab-4-1.svg', './image/tab-4-2-1.svg',
            './image/tab-4-2-2.svg', './image/tab-4-2-3.svg', './image/tab-4-2-bk.svg', './image/tab-4-2-line.svg', './image/tab-4-2.svg', 
            './image/tab-active-bk.png',
            './image/title-1.svg', './image/title-2.svg', './image/title-3.svg', './image/title-4.svg', './image/w-1.png',
            './image/w-2.png', './image/w-3.png', './image/w-4.png', './image/w-5.png', './image/w-6.png', './image/w-7.png',
            './image/w-8.png', './image/r-1.png', './image/r-2.png', './image/r-3.png', './image/r-4.png',
            './voice/click.mp3'
        ],
        onStart: function (total) {
            console.log(0);

        },
        onProgress: function (current, total) {
            var persent = parseInt(current / total * 100) + '%';
            $('#loaderText').html('资源加载中 ' + persent);
        },
        onComplete: function (total) {
            setTimeout(() => {
                pageStart();
            }, 500)
        }
    });
    loader.start();


});

function pageStart() {
    $('.loader').hide();
}




// tabs
const myAudio = document.getElementById('myAudio');
$('.tab').click(function () {
    myAudio.play();
    var id = $(this).attr('data-id');
    var group = $(this).attr('data-group');
    $('.tab').removeClass('active');
    $('.tab-container').attr('data-active', 'false');
    $(this).addClass('active');
    console.log((new Date()).toLocaleTimeString());
    $('.tab-container[data-id="' + id + '"]').attr('data-active', 'true');
    console.log((new Date()).toLocaleTimeString());
    if (group === '3') {
        $('.section-2 .btns[data-id="1-2"]').attr('data-active', 'true');
        $('.tab[data-group="' + group + '"]').addClass('unactive');
        $(this).removeClass('unactive');
    } if (group === '4') {
        $('.tab-container[data-id="1-2"]').attr('data-active', 'true');
        $('img.map-1-b').hide();
        $('img.map').hide();
    } else {
        $('img.map-1-b').show();
        $('img.map').show();
    }

    if (id === '1-2') {
        $('.tab[data-group="' + 3 + '"]').addClass('active');
        $('.tab[data-group="' + 3 + '"]').removeClass('unactive');
    }
    // reset 
    $('.legand-group').css('opacity', 1);
    $('.tab-4-2-item').show(); 
});

$('.legand-group').click(function () {
    const id = $(this).attr('data-id');
    $('.tab-4-2-item').hide();
    $('.tab-4-2-item[data-id="' + id + '"]').show();
    $('.legand-group').css('opacity', 0.3);
    $('.legand-group[data-id="' + id + '"]').css('opacity', 1);
});
$(document).on('click', function (event) {
    if (!$(event.target).hasClass('legand-group') &&
        !$(event.target).parents().hasClass('legand-group') &&
        !$(event.target).hasClass('tab') &&
        !$(event.target).parents().hasClass('tab')) {
        $('.legand-group').css('opacity', 1);
        $('.tab-4-2-item').show();
    }
});
 
function onLoad() {
    alert('The resolution of the project is fixed with 5760px * 2160px according to the requiement of client. This alert is not a part of project.');
} 