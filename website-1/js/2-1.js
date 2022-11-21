
// vi
const videoPlayer1 = videojs('video1');
const videoPlayer2 = videojs('video2');
const videoPlayer3 = videojs('video3');

// open modal
$('.btn-modal').click(function () {
    const name = $(this).attr('data-modal');
    $('.modal').hide();
    $('#' + name).css('display', 'block');
    const id = $(this).attr('data-id');
    $('.ham-2-1').css('opacity', 0.2);
    $('.ham-2-1-' + id).css('opacity', 1);
    $('.section-second').addClass('modal-open');
});

//  close modal
$('.section-second').on('click', function (event) { 
    if (!$(event.target).hasClass('modal') &&
        !$(event.target).parents().hasClass('modal') && 
        !$(event.target).hasClass('btn-modal')) {
        modalClose();
    }
}); 

function modalClose() {
    $('.modal').hide();
    $('.section-second').removeClass('modal-open');
    $('.ham-2-1').css('opacity', 1);
    videoPlayer1.pause();
    videoPlayer2.pause();
    videoPlayer3.pause();
}

function back() {
    if (!$('.section-second').hasClass('cover') &&
        !$('.section-second').hasClass('modal-open')) {
        window.location.href = 'index.html';
    } else if ($('.section-second').hasClass('cover') &&
        !$('.section-second').hasClass('modal-open')) {
        $('.section-second').removeClass('cover');
    } else {
        modalClose();
    }
}

$('.list .list-item').click(function () {
    $('.list .list-item').removeClass('active');
    $(this).addClass('active');
    $('.section-second').addClass('cover');
    $('.section-second').attr('data-cover', $(this).attr('data-id'));
});

$(function () {
    $('.video-btn').on('click', function () {
        $(this).parent().children('.video-player').css('visibility', 'visible');
        $(this).hide(); 
        const id = $(this).parent('.modal-video').attr('data-id'); 
        if ('1' === id) {
            videoPlayer1.play();
        } else if ('2' === id) {
            videoPlayer2.play();
        } else if ('3' === id) {
            videoPlayer3.play();
        }
    }); 

    videoPlayer1.on("play", function () {
        $($('.video-btn')[0]).hide();
    });

    videoPlayer1.on("pause", function () {
        $($('.video-btn')[0]).show();
    });

    videoPlayer1.on("ended", function () {
        $($('.video-player')[0]).css('visibility', 'hidden');
        $($('.video-btn')[0]).show();
    }); 
     
    videoPlayer2.on("play", function () {
        $($('.video-btn')[1]).hide();
    });

    videoPlayer2.on("pause", function () {
        $($('.video-btn')[1]).show();
    });

    videoPlayer2.on("ended", function () {
        $($('.video-player')[1]).css('visibility', 'hidden');
        $($('.video-btn')[1]).show();
    });

    videoPlayer3.on("play", function () {
        $($('.video-btn')[2]).hide();
    });

    videoPlayer3.on("pause", function () {
        $($('.video-btn')[2]).show();
    });

    videoPlayer3.on("ended", function () {
        $($('.video-player')[2]).css('visibility', 'hidden');
        $($('.video-btn')[2]).show();
    }); 
});