


$('.go-back').click(function () {
    window.history.go(-1);
    return false;
});

$(function () {
    lightBox('.light-box1');
    lightBox('.light-box2');
    lightBox('.light-box3');
    lightBox('.light-box4');
    lightBox('.light-box5');
    lightBox('.light-box6');
    $('#loader').shCircleLoader({ color: "#00deff" });
});

// light box animation
function lightBox(elem) {
    var box = $(elem);
    var num = -1;
    var html = ''
    for (var i = 0; i < 12; i++) {
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

