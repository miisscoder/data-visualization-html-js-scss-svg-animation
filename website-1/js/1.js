var myPlayer = videojs('my-video');
        myPlayer.currentTime(39);
videojs('my-video').ready(function () {
    var myPlayer = this;

    myPlayer.play();
    this.on('ended', function () {
        console.log('视频播放结束');
        myPlayer.currentTime(39);
        myPlayer.play();

    });


});
$(".bottom-light").click(function(){
 myPlayer.currentTime(0);
})


function onLoad() {
    alert('The resolution of the project is fixed with 1920px * 1080px according to the requiement of client. This alert is not a part of project.');
}