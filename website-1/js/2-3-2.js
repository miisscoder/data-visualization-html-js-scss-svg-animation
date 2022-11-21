// media 
var player = videojs('video');
document.querySelector('.video-image').addEventListener('click', function (event) {
    $('.video-player').css('display', 'block');
    $('.video-image').css('display', 'none');
    player.play();
})