
$(function () {
    $('#loader').shCircleLoader({ color: "#00deff" });

    //加载资源
    var loader = new resLoader({
        resources: [
            './video/home-video1.mp4'
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


    //加载资源
    var loader2 = new resLoader({
        resources: [
            './voice/click.mp3',
            './image/2-1-chart-1.svg',
            './image/2-1-chart-2.svg',
            './image/2-1-icon-1.svg',
            './image/2-1-icon-2.svg',
            './image/2-1-icon-3.svg',
            './image/2-1-icon-4.svg',
            './image/2-1-icon-5.svg',
            './image/2-1-icon-6.svg',
            './image/2-2-bk-1.svg',
            './image/2-2-chart-1.svg',
            './image/2-2-chart-2.svg',
            './image/2-2-chart-3.svg',
            './image/2-2-chart-4.svg',
            './image/2-2-chart-5.svg',
            './image/2-2-image-1.png',
            './image/2-2-image-10.svg',
            './image/2-2-image-11.svg',
            './image/2-2-image-12.svg',
            './image/2-2-image-13.png',
            './image/2-2-image-14.png',
            './image/2-2-image-15.png',
            './image/2-2-image-16.png',
            './image/2-2-image-17.png',
            './image/2-2-image-18.png',
            './image/2-2-image-2.png',
            './image/2-2-image-3.png',
            './image/2-2-image-4.png',
            './image/2-2-image-5.png',
            './image/2-2-image-6.svg',
            './image/2-2-image-7.svg',
            './image/2-2-image-8.svg',
            './image/2-2-image-9.svg',
            './image/2-3-1.png',
            './image/2-3-10.png',
            './image/2-3-11.png',
            './image/2-3-12.png',
            './image/2-3-13.png',
            './image/2-3-14.png',
            './image/2-3-15.png',
            './image/2-3-16.png',
            './image/2-3-17.png',
            './image/2-3-18.png',
            './image/2-3-19.png',
            './image/2-3-2.png',
            './image/2-3-20.png',
            './image/2-3-21.svg',
            './image/2-3-3.png',
            './image/2-3-4.png',
            './image/2-3-5.png',
            './image/2-3-6.png',
            './image/2-3-7.png',
            './image/2-3-8.png',
            './image/2-3-9.png',
            './image/2-3-chart-1.svg',
            './image/2-3-chart-2.svg',
            './image/2-3-chart-3.svg',
            './image/2-3-line-1.png',
            './image/2-3-line.svg',
            './image/2-3-text-bk.png',
            './image/baowujituan.svg',
            './image/bk-1-2.svg',
            './image/bk-1.svg',
            './image/bk-2.svg',
            './image/bk-3.svg',
            './image/bk-4.png',
            './image/bk-5.png',
            './image/bk-6.png',
            './image/bk-7.png',
            './image/bk-8.png',
            './image/bk-9.png',
            './image/bk.jpg',
            './image/ditu.png',
            './image/horizontal-line.png',
            './image/line.svg',
            './image/nanjinggangtie.svg',
            './image/tab-1.svg',
            './image/tab-2.svg',
            './image/tab-3.svg',
            './image/tab-4.svg',
            './image/tab-5.svg',
            './image/tab-6.svg',
            './image/title-light-2.svg',
            './image/title-light-3.svg',
            './image/title-light-4.svg',
            './image/title-light-5.svg',
            './image/title-light.svg',
            './image/vertical-line.png',
            './image/video.jpg',
            './image/xingchengtegang.svg',
        ],
        onStart: function (total) {
            console.log(total);
        },
        onProgress: function (current, total) {
            console.log(current);
        },
        onComplete: function (total) {
            console.log(total);
        }
    });
    loader2.start();
});

function pageStart() {
    $('.loader').hide();
} 


function onLoad() {
    alert('The resolution of the project is fixed with 3840px * 1080px according to the requiement of client. This alert is not a part of project.');
} 