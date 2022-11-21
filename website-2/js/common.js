 
const myAudio = document.getElementById('myAudio'); 
$(function () {
    lightBox('.light-box1');
    lightBox('.light-box2');
    lightBox('.light-box3');
    $('#loader').shCircleLoader({ color: "#00deff" });
});

// light box animation
function lightBox(elem) {
    var box = $(elem);
    var num = -1;
    var html = ''
    for (var i = 0; i < 20; i++) {
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
        if (num >= 20) num = -1;
        changeStyle();
    }, 300)
}

//  go back icon click event
$('.go-back').click(function () {
    window.history.go(-1);
    return false;
});
$(function () {

    //加载资源
    var loader = new resLoader({
        resources: [
            './voice/click.mp3',
            './video/11.mp4', 
            './fonts/SKFChevinDemiBold.ttf',
            './fonts/SKFChevinLight.ttf',
            './fonts/SKFChevinMedium.ttf',
            './fonts/SourceHanSansCN-Bold.ttf',
            './fonts/SourceHanSansCN-Bold.woff',
            './fonts/SourceHanSansCN-Medium.ttf',
            './fonts/SourceHanSansCN-Medium.woff',
            './fonts/SourceHanSansCN-Regular.ttf',
            './fonts/SourceHanSansCN-Regular.ttf',
            './img/1-circle.png',
            './img/back.png',
            './img/bk.jpg',
            './img/bottom-float.png',
            './img/btn-bk-hover.png',
            './img/btn-bk.png',
            './img/frame2.png',
            './img/line-2.png',
            './img/line-3.png',
            './img/line-4.png',
            './img/line-5.png',
            './img/top-float.png',
            './img/video-btn.png',
            './img/video-cover.jpg',
        ],
        onStart: function (total) {

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
    $('.menu').addClass('animation-action');
    briefShow(); 
} 
function briefShow() {
    $('.brief-box').animate({
        width: '100%',
        opacity: 1
    }, 400, function () {
        $('.brief-box').animate({ height: '100%' }, 400);
    })
    setTimeout(() => {
        $('.brief-inner').niceScroll({
            cursorcolor: "#72C8D5",
            cursorwidth: '4px',
            cursorborder: "0px solid #fff",
            cursorborderradius: "2px",
        });
    }, 800);
}

$('.menu a').on('click', function () { 
    myAudio.play();
    const id = $(this).attr('data-id');
    $('.menu a').removeClass('active');
    $(this).addClass('active');
    $('.right').removeClass('active');
    $('.right.right-' + id).addClass('active');
    videoPlayer.pause();
});


function onLoad() {
    alert('The resolution of the project is fixed with 3840px * 1080px according to the requiement of client. This alert is not a part of project.');
}