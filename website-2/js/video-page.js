const videoPlayer = videojs('my-video');
$(function () {
    $('.video-btn').on('click', function () {
        $('.video-player').css('visibility', 'visible');
        $(this).hide();
        $('.section').css('background', 'none');
        videoPlayer.play();
    });

    videoPlayer.on("play", function () {
        $('.video-btn').hide();

    });

    videoPlayer.on("pause", function () {
        $('.video-btn').show();
    });

    videoPlayer.on("ended", function () {
        $('.video-player').css('visibility', 'hidden');
        $('.video-btn').show();
    });

});