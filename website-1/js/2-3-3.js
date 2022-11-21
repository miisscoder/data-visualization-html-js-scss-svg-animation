const colors = ['#fff', '#f8feff', '#f2fdff', '#ebfcff', '#e5fbff', '#defbff', '#d8faff',
    '#d1f9ff', '#cbf8ff', '#c4f7ff', '#bef6ff', '#b7f5ff', '#b1f4ff', '#aaf3ff', '#a3f2ff', '#9df2ff',
    '#96f1ff', '#90f0ff', '#89efff', '#83eeff', '#7cedff', '#76ecff', '#6febff', '#69eaff', '#62e9ff',
    '#5ce9ff', '#55e8ff', '#4ee7ff', '#48e6ff', '#41e5ff', '#3be4ff', '#34e3ff', '#2ee2ff', '#27e1ff',
    '#21e0ff', '#1ae0ff', '#14dfff', '#0ddeff', '#07ddff', '#00dcff'];

self.setInterval("clock()", 50);
var start = colors.length - 1;
function clock() {
    for (var i = 0; i !== colors.length; i++) {
        document.querySelectorAll('.cls-' + (i + 2)).forEach(
            function (item) {
                item.style.fill =
                    colors[((i + start) % colors.length)];
            });
    }
    start === 0 ? start = colors.length - 1 : start--;
}