

// amount
// minus 
$('body').on('click', '.minus', function () {
    var n = Number($(this).parent('.group').children('.number').val());
    if (Number(n)) {
        $(this).parent('.group').children('.number').val(0 === n ? 0 : n - 1);
    }
});
// add
$('body').on('click', '.add', function () {
    var n = Number($(this).parent('.group').children('.number').val());
    if (Number(n) || Number(n) === 0) {
        $(this).parent('.group').children('.number').val(n + 1);
    }
});



// tabs
$('.tab').click(function () {
    var id = $(this).attr('data-tab');
    $(this).parent('.tabs').children('.tab').removeClass('active');
    $(this).addClass('active');
    $(this).parent('.tabs').parent('.tab-template').
        children('.tab-containers').children('.tab-container').hide();
    $(this).parent('.tabs').parent('.tab-template').
        children('.tab-containers').children('.tab-container[data-tab="' + id + '"]').show();
});



// modals
$('.bk-cover').click(function () {
    $('.modal').hide();
    $('.bk-cover').hide();
});

// open modal
$('.btn-modal').click(function () {
    const name = $(this).attr('data-modal');
    $('.bk-cover').show();
    $('.' + name).show();
});
//  close modal
$('.modal .btn-remove-grey').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
});
$('.modal .btn-delete-ok').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
});



// pannel
$('.pannel-head').click(function () {
    const ex = $(this).parent('.pannel').attr('data-expand');
    $(this).parent('.pannel').attr('data-expand', 'true' === ex ? false : true)
});



// link get parameter
function getParameter(name) {
    var url = document.location.href;
    var start = url.indexOf("?") + 1;
    if (start == 0) {
        return "";
    }
    var value = "";
    var queryString = url.substring(start);
    var paraNames = queryString.split("&");
    for (var i = 0; i < paraNames.length; i++) {
        if (name == getParameterName(paraNames[i])) {
            value = getParameterValue(paraNames[i])
        }
    }
    return value;
}
// link get parameter -2
function getParameterName(str) {
    var start = str.indexOf("=");
    if (start == -1) {
        return str;
    }
    return str.substring(0, start);
}
// link get parameter -3
function getParameterValue(str) {
    var start = str.indexOf("=");
    if (start == -1) {
        return "";
    }
    return str.substring(start + 1);
}




// addEventListener ���ݸ������
function addEventListener(element, type, fn) {
    // ����Զ���ĺ���������ķ�������ע������
    if (typeof element.addEventListener != "undefined") {
        // һ��Ҫע�⣬undefined���ַ������ͣ����ȥ����IE����ѭ��
        element.addEventListener(type, fn, false);

    } else if (typeof element.attachEvent != "undefined") {
        element.attachEvent("on" + type, fn);
        // ��Ӧ�¼�������clickӦ��ֱ��дҲ��ֱ�ӱ��������˼����΢���Ҫ��ǰ���һ��"on"
    } else {
        element["on" + type] = fn;
        // �����������������������ݣ�ֻ��д����һ��
    }
}

function isEmail(str) {
    var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (re.test(str) != true) {
        return false;
    } else {
        return true;
    }
}


function IEVersion() {
    var userAgent = navigator.userAgent; //ȡ���������userAgent�ַ���  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //�ж��Ƿ�IE<11�����  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //�ж��Ƿ�IE��Edge�����  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE�汾<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11  
    } else {
        return 1000;//����ie�����
    }
}
var ie = IEVersion();


// �ϴ�ͼ��
$('.btn-upload input[type="file"]').change(function (event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var html = '<img src = "' + event.target.result + '" />';
        $('.btn-upload').before(html);
    };
    reader.readAsDataURL(selectedFile);
});



$('.to-top').click(function () {
    $('.main').scrollTop(0);
});

$('.go-back').click(function () {
    window.history.go(-1);
    return false;
});

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