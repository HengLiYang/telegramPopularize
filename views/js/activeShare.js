$(function () {
    //复制方法
    function copyMethod(text) {
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("none");
        }
        document.execCommand('Copy','false',text);
    }
    //延时定时器
    function timerTimeOut() {
        $(".copy-success-tip").show();
        clearTimeout(timer);
        var timer = setTimeout(function () {
            $(".copy-success-tip").hide();
        },2000)
    }
   $(".copy-statement").click(function () {
       var randomCode = document.getElementsByClassName('leftMathRandomCode')[0];
       copyMethod(randomCode);
       timerTimeOut();
   });
    $(".copy-link-btn").click(function () {
        var randomCode = document.getElementsByClassName('leftMathRandomCode')[0];
        copyMethod(randomCode);
        timerTimeOut();
    })

});