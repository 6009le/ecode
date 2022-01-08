document.getElementById("userName").innerHTML = prompt("请输入你的大名：(如：唐*、孙*空)");
document.getElementById("userId").innerHTML = prompt("请输入你的学号：");
document.getElementById("userAddr").innerHTML = prompt("地址(如：南湖校区西门)：");

function selectImg() {
    document.getElementById("file").click();
}

var file = document.getElementById('file');
var image = document.querySelector("img");
file.onchange = function () {
    var fileData = this.files[0];
    var pettern = /^image/;
    if (!pettern.test(fileData.type)) {
        alert("图片格式不正确");
        return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = function (e) {
        image.setAttribute("src", this.result)
    }
}

var myDate = new Date();
document.getElementById("nowTime").innerHTML = myDate.toLocaleString("zh", { hour12: false }).replace("/", "-").replace("/", "-")