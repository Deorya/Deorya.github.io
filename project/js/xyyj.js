var i = 1; //表示当前图片所在位置
var time = setTimeout("showImg()", 2000);

function icon_left() {
    clearTimeout(time) //清除时钟事件
    if (i <= 1) {
        i = 4;
    } else {
        i = i - 2;
    }
    console.info(i)
    showImg()
}

function icon_right() {
    clearTimeout(time) //清楚时钟事件
    showImg()
}

function showImg() { //让背景图片显示
    i++;
    if (i == 10) {
        i = 1;
    }
    document.getElementById("view_img").src = "../img/view/1.1." + i + ".jpg";
    document.getElementById("view_a").href = "../img/view/1.1." + i + ".jpg";
    time = setTimeout("showImg()", 2000);
}